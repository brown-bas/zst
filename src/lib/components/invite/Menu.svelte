<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { MilkOff, Vegan, WheatOff } from 'lucide-svelte';
</script>

<Dialog.Root>
	<Dialog.Trigger class="text-primary underline cursor-pointer">Menü</Dialog.Trigger>
	<Dialog.Content class="bg-background max-h-9/10 flex flex-col overflow-hidden">
		<Dialog.Header>
			<Dialog.Title class="text-4xl text-primary bg-background">Menü</Dialog.Title>
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
				<p class="text-muted-foreground">Érkezéskor tálcáról kínáljuk 60 perces időtartamban.</p>
			</div>
			<div class="flex flex-col">
				<h3 class="text-lg font-sans text-foreground">Italok</h3>
				<h4 class="font-sans text-muted-foreground">Mimóza pezsgő koktél</h4>
				<h4 class="font-sans text-muted-foreground">Rostos üdítők</h4>
				<h4 class="font-sans text-muted-foreground">Ásványvíz</h4>
				<h4 class="font-sans text-muted-foreground">Kávé</h4>
			</div>
			<div class="flex flex-col gap-2">
				<h2 class="text-xl font-sans text-foreground">Welcome falatok</h2>
				<p class="text-muted-foreground">
					Érkezéskor a pogácsákat könyöklőn, sós falatokat welcome asztalról kínáljuk.
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<h2 class="text-xl font-sans text-foreground">Welcome finger food-ok</h2>
				<p class="text-muted-foreground">Érkezéskor a finger foodokat tálcáról kínáljuk.</p>
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
						A guacamole friss, krémes avokádókrém lime-mal és korianderrel, amely tökéletesen
						kiegészíti a szaftos, fűszeres tépett csirkét. A ropogós focaccia chips pedig egy
						ínycsiklandó, olívaolajjal és fűszerekkel gazdagított falat, amely remekül harmonizál a
						többi összetevővel.
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
						A hideg hátszín vékony szeletei elegánsan lágy, gazdag ízű húsélményt kínálnak, míg a
						Dijon-i mustár pikáns, enyhén csípős jegyei kiemelik a frissességét. A rukkolalevelek
						friss, enyhén borsos íze pedig tökéletesen balanszírozza a fogás ízvilágát, egyedülálló,
						modern étkezési élményt teremtve.
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
						A fűszeres humuszkrém gazdag, sima állagú, melyet a pörkölt fűszerek és a tahini mély
						ízei tesznek különlegessé. A kápia paprika édes, füstös íze friss, roppanós textúrával
						egészíti ki, így egy ínycsiklandó, színes kombinációt alkot.
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
				<h4 class="font-sans text-muted-foreground">Hungária Irsai Olivér édes pezsgő</h4>
				<h4 class="font-sans text-muted-foreground">Alkoholmentes pezsgő</h4>
			</div>
			<h2 class="text-xl font-sans text-foreground">Ünnepi vacsora</h2>
			<div class="flex flex-col gap-4">
				<h3 class="text-lg font-sans text-foreground">Előételek</h3>
				<div class="flex flex-col">
					<h4 class="font-sans text-foreground">Antipasti Tál</h4>
					<p class="text-xs text-muted-foreground">
						Ez a modern antipasti tál igyekszik kiemelni a mediterrán ételek egyszerűségét és
						frissességét, miközben egy új, kreatív megközelítést ad a hagyományos válogatáshoz.
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
						Krémes körözött, füstös sült kápia paprikával és enyhén pirított dióval a tökéletes
						textúráért.
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
						Egy friss, ropogós pirított kenyérre halmozott, érett paradicsomokkal, bazsalikommal és
						extra szűz olívaolajjal készült ínycsiklandó előétel.
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
						Ez a gazdag marhahúsleves lassú főzés során elkészített, tiszta alaplé, amely a marhahús
						minden ízét magába zárja. Az ételt olyan gazdagítjuk, mint a sárgarépa, zeller és egy
						csipetnyi póréhagyma, amelyek egyedi, mély aromát adnak a levesnek.
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
						Egy ínycsiklandó, személyre szabható salátabár, ahol friss, szezonális alapanyagokból
						válogathatsz! Készíthetsz egy tálat ropogós zöldekkel, pirított magvakkal,
						dresszingekkel. Az öntetek választéka segít abban, hogy minden falat igazán egyedi és
						frissítő legyen.
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
						Egy frissítő, krémes étel, amely zellerből, almából, dióból és majonézből készül. Az
						édes és ropogós hozzávalók kombinációja adja a saláta különleges ízvilágát.
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
						Frissen sült harcsafilé, ropogósra készítve, melynek lágy, fehér húsa tökéletesen
						egyensúlyozza a citromos zöldborsó püré friss, üde ízét. A fogás mellé grillezett
						szezonális zöldségek kerülnek, melyek enyhén füstös aromájukkal egészítik ki a harcsa
						finom zamatát.
					</p>
				</div>
				<div class="flex flex-col">
					<h4 class="font-sans text-foreground">
						Konfitált kacsacomb, karamellizált zöldalma, vajas puliszka, rozmaringos jus <WheatOff
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
						A lassan sült, omlós kacsacomb, karamellizált savanykás zöldalmával és lágy, krémes
						puliszkával, rozmaringos pecsenyelével koronázva.
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
						A porchetta egy hagyományos olasz sült sertéstekercs, amelyet a húst fokhagymával,
						rozmaringgal, édesköménnyel és más fűszerekkel ízesítve lassan sütnek, míg kívül
						ropogós, belül pedig szaftos lesz. A lyoni hagymás krémes burgonyapüré gazdag, vajas
						krumplipüré karamellizált hagymával, amely mély, édeskés ízt ad az ételnek.
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
						A burgundi borral főtt marhalábszár egy lassan párolt, omlós húsétel, mely mellett a
						házi túrós galuska könnyű, mégis tartalmas köretként tökéletesen kiegészíti az étel
						ízeit.
					</p>
				</div>
				<div class="flex flex-col">
					<h4 class="font-sans text-foreground">
						Citromos - ricottás spaghetti, szarvasgombaolaj párlattal ízesített pirítós <Vegan
							class="inline-block p-1 bg-green-300 rounded-sm ml-0.5"
							size="24px"
							color="oklch(0.145 0 0)"
						/>
					</h4>
					<p class="text-xs text-muted-foreground">
						A citromos-ricottás spaghetti egy könnyed, krémes tésztaétel, amelyben a friss citrom
						üdesége és a ricotta lágy krémessége harmonikusan egyesül. A hozzá kínált
						szarvasgombaolaj-párlattal ízesített pirítós illatos, földes aromáival emeli ki a fogás
						eleganciáját, így egy friss, mégis kifinomult mediterrán étel születik.
					</p>
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<h3 class="text-lg font-sans text-foreground">Desszertek</h3>
				<div class="flex flex-col">
					<h4 class="font-sans text-foreground">Idény gyümölcstál</h4>
					<p class="text-xs text-muted-foreground">
						Egy színes és frissítő válogatás a legédesebb idénygyümölcsökből egy tálra rendezve,
						hogy a természetes ízek és frissesség minden falatban megnyilvánuljon.
					</p>
				</div>
				<div class="flex flex-col">
					<h3 class="font-sans text-foreground">Sütemények</h3>
					<h4 class="text-xs font-sans text-muted-foreground">Belga király tortafalat</h4>
					<h4 class="text-xs font-sans text-muted-foreground">Őrség tortafalat</h4>
					<h4 class="text-xs font-sans text-muted-foreground">Eszterházy tortafalat</h4>
					<h4 class="text-xs font-sans text-muted-foreground">Pisztáciás operafalat</h4>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h2 class="text-xl font-sans text-foreground">Éjféli menü</h2>
				<p class="text-muted-foreground">Az éjféli menü tételeit büféasztalról kínáljuk.</p>
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
