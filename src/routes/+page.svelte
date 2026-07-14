<script lang="ts">
	import { onMount } from 'svelte';
	import Signature from '$lib/components/Signature.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { MediaQuery } from 'svelte/reactivity';
	import HeroBg from '$lib/assets/hero-bg.webp';
	import Closing from '$lib/assets/closing.webp';
	import Invitation from '$lib/assets/invitation.webp';
	import Program from '$lib/assets/program.webp';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { MilkOff, Vegan, WheatOff } from 'lucide-svelte';
	import { mode } from 'mode-watcher';

	let moved = $state(new MediaQuery('(prefers-reduced-motion: reduce)').current);
	let settled = $state(new MediaQuery('(prefers-reduced-motion: reduce)').current);

	onMount(() => {
		window.scrollTo(0, 0);

		const moveTimer = window.setTimeout(() => {
			moved = true;
		}, 2500);

		const settleTimer = window.setTimeout(() => {
			settled = true;
		}, 2500 + 1500);

		return () => {
			window.clearTimeout(moveTimer);
			window.clearTimeout(settleTimer);
		};
	});

	$effect(() => {
		document.body.style.overflow = settled ? '' : 'hidden';
	});

	const isDesktop = new MediaQuery('(min-width: 768px)');

	const events = [
		{
			time: '16:30',
			name: 'Vendégvárás',
			description: 'Welcome drink, falatoznivalók és laza nyári hangulat'
		},
		{
			time: '17:30',
			name: 'Szertartás',
			description: 'A nagy pillanat - sziromdobálással'
		},
		{
			time: '18:00',
			name: 'Gratulációk és Pezsgőzés',
			description: 'Koccintás és ünneplés'
		},
		{
			time: '18:30',
			name: 'Csoportképek és csokordobás',
			description: 'Közös fotók készítése és menyasszonyi csokor eldobása'
		},
		{
			time: '19:10',
			name: 'Vacsora',
			description: 'Ünnepi vacsora felszolgálása'
		},
		{
			time: '20:40',
			name: 'Játékos kvíz',
			description: 'Könnyed, szórakoztató közös játék'
		},
		{
			time: '21:00',
			name: 'Nyitótánc',
			description: 'Az est hivatalos megnyitása egy tánccal, majd kezdődik a buli'
		},
		{
			time: '22:30',
			name: 'Tortavágás',
			description: 'Torta felvágása és vidám páros játék'
		},
		{
			time: '23:00',
			name: 'Indul a buli!',
			description: 'Felszabadult tánc és fergeteges hangulat hajnalig'
		},
		{
			time: '00:00',
			name: 'Éjféli falatozás',
			description: 'DIY Hot-Dog állomás'
		}
	];

	const infos = [
		{
			title: 'Visszajelzés (RSVP)',
			info: 'Kérjük, részvételi szándékotokat legkésőbb 2026. augusztus 1-ig jelezzétek az eddig is használt kommunikációs csatornák valamelyikén.'
		},
		{
			title: 'Sofőrszolgálat',
			info: 'Az este folyamán, 3 fővel, sofőrszolgálat is rendelkezésre áll majd, így amennyiben előre jelzitek, hogy igénybe vennétek, segítenek a biztonságos hazajutásban.'
		},
		{
			title: 'Öltözködés',
			info: 'Elegáns, alkalomhoz illő megjelenést javaslunk. Érezzétek jól magatokat, a legfontosabb, hogy kényelmesen ünnepelhessünk együtt!'
		},
		{
			title: 'Ünneplés',
			info: 'Egy kötetlen, elegáns hangulatú ünneplésre készülünk, sok zenével és tánccal. Hagyományos menyasszonytánc és menyasszonyrablás nem lesz - helyette szeretnénk minél több időt Veletek tölteni az ünneplésben.'
		},
		{
			title: 'Ajándék',
			info: 'A legnagyobb ajándék számunkra az, hogy együtt ünnepelhetünk Veletek. Ha mégis szeretnétek hozzájárulni a közös jövőnkhöz, azt hálásan köszönjük.'
		},
		{
			title: 'Vendégek által hozott finomságok',
			info: 'Ha szeretnétek házi készítésű süteménnyel vagy alkoholos itallal hozzájárulni az ünnepléshez, azt örömmel fogadjuk és nagyon köszönjük! Kérjük azonban, hogy ezt előre jelezzétek felénk, mivel a catering felé szükséges leadnunk a hozott tételek megnevezését és mennyiségét.'
		},
		{
			title: 'Ételérzékenység',
			info: 'Az est folyamán vacsorával és desszertekkel készülünk. Kérjük, ha ételallergiád vagy speciális étrended van, jelezd a visszajelzésnél.'
		}
	];

	const baseClass = $derived(
		`${moved ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 delay-1000`
	);
</script>

<svelte:head>
	<link rel="preload" as="image" href={HeroBg} fetchpriority="high" />
</svelte:head>

<main class="relative min-h-screen overflow-hidden flex flex-col items-center">
	<div
		class="w-full md:h-[calc(50vh-((100vw/3)*106/673)/2)] h-[calc(40vh-((100vw/3)*106/673)/2)] bg-sky-100 motion-reduce:bg-position-[center_35%] not-motion-reduce:bg-fixed md:bg-cover md:not-motion-reduce:bg-position-[bottom_center] bg-position-[top_center] bg-size-[175%] bg-no-repeat {baseClass}"
		style:background-image="url({HeroBg})"
	></div>
	<div
		class="{settled
			? 'absolute'
			: 'fixed'} left-1/2 z-20 w-5/6 md:w-1/3 transition-all duration-1500 ease-in-out"
		style:top={moved
			? isDesktop.current
				? 'calc(47.5vh - ((100vw/3)*106/673)/2 + 6rem)'
				: 'calc(35vh - ((100vw/3)*106/673)/2 + 6rem)'
			: '50%'}
		style:transform={moved ? 'translate(-50%, 0) scale(1)' : 'translate(-50%, -50%) scale(1.05)'}
	>
		<Signature />
	</div>
	<div class="md:pt-[20vh] pt-[15vh]">
		<h3 class="{baseClass} md:m-auto mt-8 text-2xl md:text-3xl">2026. augusztus 15.</h3>
	</div>
	<div class="{baseClass} w-9/10 md:w-1/2 flex flex-col py-12 md:py-24 gap-4">
		<p class="italic text-center">
			„Talán semmi sincs szebb a világon, mint találni egy embert, akinek lelkébe nyugodtan
			letehetjük szívünk titkait, akiben megbízunk, akinek kedves arca elűzi lelkünk bánatát, akinek
			egyszerű jelenléte elég, hogy vidámak és nagyon boldogok legyünk.”
		</p>
		<p class="text-sm text-center">— Hemingway —</p>
	</div>
	<div class="{baseClass} md:w-1/2 w-9/10 flex flex-col pt-16 gap-4">
		<h2 class="text-5xl text-center">Szeretettel meghívunk</h2>
		<p class="text-center">
			Örömmel osztjuk meg Veletek életünk egyik legszebb napját, amikor örökre összekötjük az
			életünket.
			<br />
			<br class="md:hidden" />
			Nagy boldogság lenne számunkra, ha ezen a különleges napon velünk ünnepelnétek.
		</p>
		<img
			src={Invitation}
			alt="Meghívás"
			loading="lazy"
			fetchpriority="low"
			sizes="(min-width: 768px) 50vw, 90vw"
			decoding="async"
			class="mt-6 w-full md:w-4/5 rounded-md m-auto"
		/>
	</div>
	<div class="{baseClass} md:w-1/2 w-9/10 flex flex-col items-center pt-32 gap-4">
		<h2 class="text-5xl mb-4 text-center">Program</h2>
		<ul class="w-full md:w-3/4">
			{#each events as event, i}
				<li class="relative pl-6">
					<div
						class="absolute left-0 w-0.5 bg-primary"
						style="
								top: {i === 0 ? '1rem' : '0'};
								bottom: {i === events.length - 1 ? 'calc(100% - 1rem)' : '0'};
							"
					></div>
					<div class="absolute -left-0.75 top-4 h-2 w-2 rounded-full bg-foreground"></div>
					<div class="pb-8 pt-2.5">
						<p class="text-sm">{event.time}</p>
						<h3 class="font-sans text-foreground font-bold text-xl">{event.name}</h3>
						{#if event.description}
							<p>
								{event.description}
								{#if i === 4}
									-
									<Dialog.Root>
										<Dialog.Trigger class="text-primary underline cursor-pointer"
											>Menü</Dialog.Trigger
										>
										<Dialog.Content class="bg-background max-h-9/10 flex flex-col overflow-hidden">
											<Dialog.Header>
												<Dialog.Title class="text-4xl text-primary bg-background">Menü</Dialog.Title
												>
												<Dialog.Description>
													<div class="flex flex-col md:flex-row gap-2 mt-2">
														<p>
															<Vegan
																class="inline-block p-1 bg-green-300 rounded-sm ml-1"
																size="24px"
																color="oklch(0.145 0 0)"
															/>: Vegánbarát
														</p>
														<p>
															<WheatOff
																class="inline-block p-1 bg-yellow-300 rounded-sm ml-1"
																size="24px"
																color="oklch(0.145 0 0)"
															/>: Gluténmentes
														</p>
														<p>
															<MilkOff
																class="inline-block p-1 bg-red-300 rounded-sm ml-1"
																size="24px"
																color="oklch(0.145 0 0)"
															/>: Laktózmentes
														</p>
														<p>
															<MilkOff
																class="inline-block p-1 bg-blue-300 rounded-sm ml-1"
																size="24px"
																color="oklch(0.145 0 0)"
															/>: Tejmentes
														</p>
													</div>
												</Dialog.Description>
											</Dialog.Header>
											<div class="flex-1 min-h-0 gap-8 flex flex-col overflow-y-auto pr-6">
												<div class="flex flex-col gap-2">
													<h2 class="text-xl font-sans text-foreground">Welcome drink-ek</h2>
													<p class="text-muted-foreground">
														Érkezéskor tálcáról kínáljuk 60 perces időtartamban.
													</p>
												</div>
												<div class="flex flex-col">
													<h3 class="text-lg font-sans text-foreground">Welcome drink</h3>
													<h4 class="font-sans text-muted-foreground">Mimóza pezsgő koktél</h4>
													<h4 class="font-sans text-muted-foreground">Rostos üdítők</h4>
													<h4 class="font-sans text-muted-foreground">Ásványvíz</h4>
													<h4 class="font-sans text-muted-foreground">Kávé</h4>
												</div>
												<div class="flex flex-col gap-2">
													<h2 class="text-xl font-sans text-foreground">Welcome falatok</h2>
													<p class="text-muted-foreground">
														Érkezéskor a pogácsákat könyöklőn, sós falatokat welcome asztalról
														kínáljuk.
													</p>
												</div>
												<div class="flex flex-col gap-2">
													<h2 class="text-xl font-sans text-foreground">Welcome finger food-ok</h2>
													<p class="text-muted-foreground">
														Érkezéskor a finger foodokat tálcáról kínáljuk.
													</p>
												</div>
												<div class="flex flex-col gap-4">
													<h3 class="text-lg font-sans text-foreground">Finger food falatok</h3>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">
															Guacamole, tépett csirke, focaccia chips <MilkOff
																class="inline-block p-1 bg-red-300 rounded-sm ml-1"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
														</h4>
														<p class="text-xs text-muted-foreground">
															A guacamole friss, krémes avokádókrém lime-mal és korianderrel, amely
															tökéletesen kiegészíti a szaftos, fűszeres tépett csirkét. A ropogós
															focaccia chips pedig egy ínycsiklandó, olívaolajjal és fűszerekkel
															gazdagított falat, amely remekül harmonizál a többi összetevővel.
														</p>
													</div>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">
															Hideg hátszín, Dijon-i mustár, rukkola <MilkOff
																class="inline-block p-1 bg-blue-300 rounded-sm ml-1"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
															<WheatOff
																class="inline-block p-1 bg-yellow-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
														</h4>
														<p class="text-xs text-muted-foreground">
															A hideg hátszín vékony szeletei elegánsan lágy, gazdag ízű húsélményt
															kínálnak, míg a Dijon-i mustár pikáns, enyhén csípős jegyei kiemelik a
															frissességét. A rukkolalevelek friss, enyhén borsos íze pedig
															tökéletesen balanszírozza a fogás ízvilágát, egyedülálló, modern
															étkezési élményt teremtve.
														</p>
													</div>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">
															Fűszeres humusz, kápia paprika, pita
															<Vegan
																class="inline-block p-1 bg-green-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
														</h4>
														<p class="text-xs text-muted-foreground">
															A fűszeres humuszkrém gazdag, sima állagú, melyet a pörkölt fűszerek
															és a tahini mély ízei tesznek különlegessé. A kápia paprika édes,
															füstös íze friss, roppanós textúrával egészíti ki, így egy
															ínycsiklandó, színes kombinációt alkot.
														</p>
													</div>
												</div>
												<div class="flex flex-col gap-2">
													<h2 class="text-xl font-sans text-foreground">Pezsgős gratuláció</h2>
													<p class="text-muted-foreground">Ceremónia után tálcáról kínáljuk.</p>
												</div>
												<div class="flex flex-col">
													<h3 class="text-lg font-sans text-foreground">Pezsgők</h3>
													<h4 class="font-sans text-muted-foreground">Hungaria Extra dry</h4>
													<h4 class="font-sans text-muted-foreground">
														Hungária Irsai Olivér édes pezsgő
													</h4>
													<h4 class="font-sans text-muted-foreground">Alkoholmentes pezsgő</h4>
												</div>
												<h2 class="text-xl font-sans text-foreground">Ünnepi vacsora</h2>
												<div class="flex flex-col gap-4">
													<h3 class="text-lg font-sans text-foreground">Előételek</h3>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">Antipasti Tál</h4>
														<p class="text-xs text-muted-foreground">
															Ez a modern antipasti tál igyekszik kiemelni a mediterrán ételek
															egyszerűségét és frissességét, miközben egy új, kreatív megközelítést
															ad a hagyományos válogatáshoz.
														</p>
													</div>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">
															Házi körözött, sült kápia paprika, pirított dió
															<WheatOff
																class="inline-block p-1 bg-yellow-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
														</h4>
														<p class="text-xs text-muted-foreground">
															Krémes körözött, füstös sült kápia paprikával és enyhén pirított
															dióval a tökéletes textúráért.
														</p>
													</div>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">
															Paradicsomos bruschetta
															<Vegan
																class="inline-block p-1 bg-green-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
														</h4>
														<p class="text-xs text-muted-foreground">
															Egy friss, ropogós pirított kenyérre halmozott, érett paradicsomokkal,
															bazsalikommal és extra szűz olívaolajjal készült ínycsiklandó előétel.
														</p>
													</div>
												</div>
												<div class="flex flex-col gap-4">
													<h3 class="text-lg font-sans text-foreground">Leves</h3>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">
															Marhahús-eszencia, színes zöldségek, omlós marhahús <MilkOff
																class="inline-block p-1 bg-blue-300 rounded-sm ml-1"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
														</h4>
														<p class="text-xs text-muted-foreground">
															Ez a gazdag marhahúsleves lassú főzés során elkészített, tiszta
															alaplé, amely a marhahús minden ízét magába zárja. Az ételt olyan
															gazdagítjuk, mint a sárgarépa, zeller és egy csipetnyi póréhagyma,
															amelyek egyedi, mély aromát adnak a levesnek.
														</p>
													</div>
												</div>
												<div class="flex flex-col gap-4">
													<h3 class="text-lg font-sans text-foreground">Saláta</h3>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">
															Frissítő salátaválogatás <WheatOff
																class="inline-block p-1 bg-yellow-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/><Vegan
																class="inline-block p-1 bg-green-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
														</h4>
														<p class="text-xs text-muted-foreground">
															Egy ínycsiklandó, személyre szabható salátabár, ahol friss, szezonális
															alapanyagokból válogathatsz! Készíthetsz egy tálat ropogós zöldekkel,
															pirított magvakkal, dresszingekkel. Az öntetek választéka segít abban,
															hogy minden falat igazán egyedi és frissítő legyen.
														</p>
													</div>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">
															Waldorf saláta, pirított dió <WheatOff
																class="inline-block p-1 bg-yellow-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/><Vegan
																class="inline-block p-1 bg-green-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
														</h4>
														<p class="text-xs text-muted-foreground">
															Egy frissítő, krémes étel, amely zellerből, almából, dióból és
															majonézből készül. Az édes és ropogós hozzávalók kombinációja adja a
															saláta különleges ízvilágát.
														</p>
													</div>
												</div>
												<div class="flex flex-col gap-4">
													<h3 class="text-lg font-sans text-foreground">Főételek</h3>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">
															Ropogós harcsafilé, citromos zöldborsó püré, grillezett zöldségek <WheatOff
																class="inline-block p-1 bg-yellow-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/><MilkOff
																class="inline-block p-1 bg-red-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
														</h4>
														<p class="text-xs text-muted-foreground">
															Frissen sült harcsafilé, ropogósra készítve, melynek lágy, fehér húsa
															tökéletesen egyensúlyozza a citromos zöldborsó püré friss, üde ízét. A
															fogás mellé grillezett szezonális zöldségek kerülnek, melyek enyhén
															füstös aromájukkal egészítik ki a harcsa finom zamatát.
														</p>
													</div>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">
															Konfitált kacsacomb, karamellizált zöldalma, vajas puliszka,
															rozmaringos jus <WheatOff
																class="inline-block p-1 bg-yellow-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/><MilkOff
																class="inline-block p-1 bg-red-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
														</h4>
														<p class="text-xs text-muted-foreground">
															A lassan sült, omlós kacsacomb, karamellizált savanykás zöldalmával és
															lágy, krémes puliszkával, rozmaringos pecsenyelével koronázva.
														</p>
													</div>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">
															Porchetta, lyoni hagymás krémes burgonyapüré, friss lecsó <WheatOff
																class="inline-block p-1 bg-yellow-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/><MilkOff
																class="inline-block p-1 bg-red-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
														</h4>
														<p class="text-xs text-muted-foreground">
															A porchetta egy hagyományos olasz sült sertéstekercs, amelyet a húst
															fokhagymával, rozmaringgal, édesköménnyel és más fűszerekkel ízesítve
															lassan sütnek, míg kívül ropogós, belül pedig szaftos lesz. A lyoni
															hagymás krémes burgonyapüré gazdag, vajas krumplipüré karamellizált
															hagymával, amely mély, édeskés ízt ad az ételnek.
														</p>
													</div>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">
															Burgundi borral főtt marhalábszár, házi túrós galuska <WheatOff
																class="inline-block p-1 bg-yellow-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
														</h4>
														<p class="text-xs text-muted-foreground">
															A burgundi borral főtt marhalábszár egy lassan párolt, omlós húsétel,
															mely mellett a házi túrós galuska könnyű, mégis tartalmas köretként
															tökéletesen kiegészíti az étel ízeit.
														</p>
													</div>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">
															Citromos - ricottás spaghetti, szarvasgombaolaj párlattal ízesített
															pirítós <Vegan
																class="inline-block p-1 bg-green-300 rounded-sm ml-0.5"
																size="24px"
																color="oklch(0.145 0 0)"
															/>
														</h4>
														<p class="text-xs text-muted-foreground">
															A citromos-ricottás spaghetti egy könnyed, krémes tésztaétel, amelyben
															a friss citrom üdesége és a ricotta lágy krémessége harmonikusan
															egyesül. A hozzá kínált szarvasgombaolaj-párlattal ízesített pirítós
															illatos, földes aromáival emeli ki a fogás eleganciáját, így egy
															friss, mégis kifinomult mediterrán étel születik.
														</p>
													</div>
												</div>
												<div class="flex flex-col gap-4">
													<h3 class="text-lg font-sans text-foreground">Desszertek</h3>
													<div class="flex flex-col">
														<h4 class="font-sans text-foreground">Idény gyümölcstál</h4>
														<p class="text-xs text-muted-foreground">
															Egy színes és frissítő válogatás a legédesebb idénygyümölcsökből egy
															tálra rendezve, hogy a természetes ízek és frissesség minden falatban
															megnyilvánuljon.
														</p>
													</div>
													<div class="flex flex-col">
														<h3 class="font-sans text-foreground">Sütemények</h3>
														<h4 class="text-xs font-sans text-muted-foreground">
															Belga király tortafalat
														</h4>
														<h4 class="text-xs font-sans text-muted-foreground">
															Őrség tortafalat
														</h4>
														<h4 class="text-xs font-sans text-muted-foreground">
															Eszterházy tortafalat
														</h4>
														<h4 class="text-xs font-sans text-muted-foreground">
															Pisztáciás operafalat
														</h4>
													</div>
												</div>

												<div class="flex flex-col gap-2">
													<h2 class="text-xl font-sans text-foreground">Éjféli menü</h2>
													<p class="text-muted-foreground">
														Az éjféli menü tételeit büféasztalról kínáljuk.
													</p>
												</div>
												<div class="flex flex-col">
													<h4 class="font-sans text-foreground">DIY - Do It Yourself Hot-Dog</h4>
													<p class="text-xs text-muted-foreground">
														Fiatalos, könnyed, mint egy igazi amerikai street-food.
														<br />
														Kondimentek: pirított hagyma, jalapeno paprika, csemegeuborka
														<br />
														Szószok: ketchup, mustár, majonéz
													</p>
												</div>
											</div>
										</Dialog.Content>
									</Dialog.Root>
								{/if}
							</p>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
		<img
			src={Program}
			alt="Program"
			loading="lazy"
			fetchpriority="low"
			sizes="(min-width: 768px) 50vw, 90vw"
			decoding="async"
			class="mt-6 w-full md:w-4/5 rounded-md m-auto"
		/>
	</div>
	<div
		class="{baseClass} flex flex-col justify-around items-center w-9/10 md:w-1/3 py-24 gap-12 md:gap-4"
	>
		<div class="flex flex-col items-center w-full h-auto">
			<h2 class="text-5xl text-center mb-8">Helyszín</h2>
			<h3 class="font-sans text-foreground w-full text-start">Wedding Lake (Soroksár, Budapest)</h3>
			<p class="text-sm text-muted-foreground w-full text-start">
				Budapest, Szentlőrinci út 195853, 1238
			</p>
			<p class="text-sm w-full text-start mt-4">
				<span class="material-symbols-rounded">directions_car</span>
				A helyszín autóval könnyen megközelíthető, parkolási lehetőség biztosított.
			</p>
		</div>
		<iframe
			loading="lazy"
			class="w-full aspect-square h-auto bg-white flex justify-center items-center rounded-xl {mode.current ===
			'dark'
				? 'brightness-75'
				: ''}"
			src="https://www.google.com/maps?q=Budapest,%20Szentlőrinci%20út%20195853,%201238%20MagyarországWedding%20Lake&output=embed&z=14"
			title="Maps"
		></iframe>
	</div>
	<div class="md:w-1/2 w-9/10 {baseClass}">
		<h2 class="text-5xl text-center mb-8">Fontos tudnivalók</h2>
		<Accordion.Root type="single" class="border-0 w-full">
			{#each infos as info, i}
				<Accordion.Item value="item-{i + 1}">
					<Accordion.Trigger>{info.title}</Accordion.Trigger>
					<Accordion.Content class="flex flex-col gap-4 text-balance">
						<p>
							{info.info}
						</p>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
	<div class="w-4/5 md:w-1/5 mt-24 {baseClass}">
		<img
			src={Closing}
			alt="Zárás"
			loading="lazy"
			fetchpriority="low"
			sizes="(min-width: 768px) 50vw, 90vw"
			decoding="async"
			class="rounded-md"
		/>
		<h2 class="font-sans text-foreground text-center mt-8 mb-4 text-lg">
			Szeretettel várunk Benneteket!
		</h2>
		<div class="px-12">
			<Signature />
		</div>
	</div>
</main>
<footer class="h-max p-6 bg-primary mt-24 flex justify-center items-center">
	<p>Made with <span class="material-symbols-rounded">favorite</span> by brown-bas</p>
</footer>
