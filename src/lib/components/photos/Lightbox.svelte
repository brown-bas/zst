<script lang="ts">
	import { mount, onMount, unmount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import chevronLeft from 'lucide-static/icons/chevron-left.svg?raw';
	import xIcon from 'lucide-static/icons/x.svg?raw';
	import downloadIcon from 'lucide-static/icons/download.svg?raw';
	import { Spinner } from '$lib/components/ui/spinner';
	import { formatBytes, imgUrl, type ImageEntry } from '$lib/manifest';

	let { images }: { images: ImageEntry[] } = $props();
	let lightbox: PhotoSwipeLightbox | undefined;

	let isOpen = $state(false);
	export { isOpen };

	function icon(id: string, shapes: string, hideable = '') {
		const bar = 'pswp__zoom-icn-bar-v';
		return (
			`<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 24 24" width="24" height="24">` +
			`<use class="pswp__icn-shadow" href="#${id}"/>` +
			(hideable ? `<use class="pswp__icn-shadow ${bar}" href="#${id}-bar"/>` : '') +
			`<g id="${id}">${shapes}</g>` +
			(hideable ? `<g id="${id}-bar" class="${bar}">${hideable}</g>` : '') +
			`</svg>`
		);
	}
	const shapes = (svg: string) => svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1] ?? '';

	function previewWidth(img: ImageEntry) {
		const scale = Math.min(1, 1600 / Math.max(img.width, img.height));
		return Math.round(img.width * scale);
	}

	onMount(() => {
		lightbox = new PhotoSwipeLightbox({
			dataSource: images.map((img) => ({
				src: imgUrl(img.preview),
				srcset: img.animated
					? undefined
					: `${imgUrl(img.preview)} ${previewWidth(img)}w, ${imgUrl(img.original)} ${img.width}w`,
				msrc: imgUrl(img.thumb),
				width: img.width,
				height: img.height,
				alt: img.name,
				original: imgUrl(img.original),
				caption: `${img.name} · ${img.width}×${img.height} · ${formatBytes(img.size)}`
			})),
			pswpModule: () => import('photoswipe'),
			maxZoomLevel: 2,
			secondaryZoomLevel: (zoom) =>
				(zoom.panAreaSize?.x ?? window.innerWidth) < 1024 ? Math.min(1, zoom.fit * 2.5) : 1,
			closeTitle: 'Bezárás',
			zoomTitle: 'Nagyítás',
			arrowPrevTitle: 'Előző',
			arrowNextTitle: 'Következő',
			errorMsg: 'A kép nem tölthető be',
			arrowPrevSVG: icon('pswp-lucide-prev', shapes(chevronLeft)),
			arrowNextSVG: icon('pswp-lucide-next', shapes(chevronLeft)),
			closeSVG: icon('pswp-lucide-close', shapes(xIcon)),
			zoomSVG: icon(
				'pswp-lucide-zoom',
				'<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M8 11h6"/>',
				'<path d="M11 8v6"/>'
			)
		});

		lightbox.on('uiRegister', () => {
			const pswp = lightbox!.pswp!;

			pswp.ui!.registerElement({
				name: 'download',
				order: 8,
				isButton: true,
				tagName: 'a',
				title: 'Eredeti letöltése',
				html: icon('pswp-lucide-download', shapes(downloadIcon)),
				onInit: (el) => {
					el.setAttribute('download', '');
					pswp.on('change', () => {
						(el as HTMLAnchorElement).href = pswp.currSlide?.data.original as string;
					});
				}
			});

			pswp.ui!.registerElement({
				name: 'caption',
				order: 9,
				isButton: false,
				appendTo: 'root',
				onInit: (el) => {
					pswp.on('change', () => {
						el.textContent = (pswp.currSlide?.data.caption as string) ?? '';
					});
				}
			});

			pswp.ui!.registerElement({
				name: 'spinner',
				order: 9,
				isButton: false,
				appendTo: 'root',
				onInit: (el) => {
					const spinner = mount(Spinner, {
						target: el,
						props: { class: 'size-8 text-white', 'aria-label': 'Betöltés' }
					});
					const update = () =>
						el.classList.toggle('pswp__spinner--active', !!pswp.currSlide?.content.isLoading());
					pswp.on('change', update);
					pswp.on('loadComplete', (e) => {
						if (e.slide === pswp.currSlide) update();
					});
					pswp.on('destroy', () => unmount(spinner));
				}
			});
		});

		lightbox.on('beforeOpen', () => (isOpen = true));
		lightbox.on('close', () => (isOpen = false));
		lightbox.on('destroy', () => (isOpen = false));

		lightbox.init();
		return () => lightbox?.destroy();
	});

	export function open(index: number) {
		lightbox?.loadAndOpen(index);
	}
</script>

<style>
	:global(.pswp__caption) {
		position: absolute;
		left: 50%;
		bottom: 1rem;
		transform: translateX(-50%);
		max-width: calc(100% - 2rem);
		padding: 0.35rem 0.9rem;
		border-radius: 9999px;
		background: rgb(0 0 0 / 0.6);
		backdrop-filter: blur(8px);
		color: white;
		font-size: 0.8rem;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	:global(.pswp) {
		--pswp-bg: oklch(0.145 0 0);
	}
	:global(.pswp .pswp__spinner) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 0.6rem;
		border-radius: 9999px;
		background: rgb(0 0 0 / 0.6);
		backdrop-filter: blur(8px);
		pointer-events: none;
		transition: opacity 0.2s;
	}
	:global(.pswp .pswp__spinner:not(.pswp__spinner--active)) {
		opacity: 0;
	}
	:global(.pswp .pswp__spinner--active) {
		transition-delay: 0.3s;
	}
	:global(.pswp__preloader .pswp__icn) {
		display: none;
	}
	:global(.pswp .pswp__button .pswp__icn) {
		fill: none;
		stroke: var(--pswp-icon-color);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		width: 24px;
		height: 24px;
		top: 18px;
		left: 13px;
	}
	:global(.pswp .pswp__button .pswp__icn-shadow) {
		stroke: var(--pswp-icon-stroke-color);
		stroke-width: 4;
	}
	:global(.pswp .pswp__button--arrow .pswp__icn) {
		width: 36px;
		height: 36px;
		top: 50%;
		margin-top: -18px;
	}
	:global(.pswp .pswp__button--arrow--next .pswp__icn) {
		left: auto;
		right: 13px;
	}
</style>

