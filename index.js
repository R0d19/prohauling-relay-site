/* ═══════════════════════════════════════════════════════════════
   FONT LOADER — non-blocking, CSP-safe (no inline event handlers)
   The <link rel="preload"> in <head> prefetches the CSS early;
   this dynamically promotes it to a stylesheet once JS runs.
═══════════════════════════════════════════════════════════════ */
(function () {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,700;0,900;1,700&display=swap';
  document.head.appendChild(link);
}());

/* ═══════════════════════════════════════════════════════════════
   TRANSLATION SYSTEM
═══════════════════════════════════════════════════════════════ */
var translations = {
  en: {
    /* Nav */
    'nav-how-it-works':       'How It Works',
    'nav-features':           'Features',
    'nav-visual-guide':       'Visual Guide',
    'nav-pricing':            'Pricing',
    'nav-faq':                'FAQ',
    'nav-cta':                'Get Started Free',
    'mobile-nav-how-it-works':'How It Works',
    'mobile-nav-features':    'Features',
    'mobile-nav-visual-guide':'Visual Guide',
    'mobile-nav-pricing':     'Pricing',
    'mobile-nav-faq':         'FAQ',
    'mobile-lang-label':      'Language:',
    'mobile-cta':             'Get Started Free',

    /* Hero */
    'hero-eyebrow':           '<span>&#9889;</span> Network-Level Speed · Auto-Booking · Relay Platform',
    'hero-h1':                'Stop Watching the Load Board.<br><span>Set the Autobook.</span>',
    'hero-sub':               'Set your rates, your routes, and your schedule — then walk away. Load found. Phone rings. Already booked. Prohauling Relay books the right loads automatically, overnight, while you sleep. You just drive.',
    'hero-cta-primary':       'Start 7-Day Free Trial',
    'hero-cta-secondary':        'See Pricing',
    'hero-cta-tutorial-text':    'Step-by-Step Autobook Setup Guide with Screenshots',
    'hero-note':              'No credit card required &nbsp;·&nbsp; 7-day free trial &nbsp;·&nbsp; Cancel any time',
    'hero-installed-link':    'Already installed? See Getting Started →',

    /* Mock UI */
    'mock-monitoring':        'Monitoring active',
    'mock-live':              'LIVE',
    'mock-meets-filters':     'Meets filters',

    /* Stats */
    'stat-filter':            'Filter Dimensions',
    'stat-alert':             'Alert Channels',
    'stat-schedule':          'Schedule Windows',
    'stat-themes':            'Color Themes',
    'stat-trial':             'Days Free Trial',

    /* Speed */
    'speed-label':            'Speed Advantage',
    'speed-title':            'See it first. Book it first.',
    'speed-sub':              'Most tools wait for the entire page to finish loading before they can even read a load. By then, another driver already booked it. Prohauling Relay works differently — it grabs the load data the instant new data arrives at your computer, before anything appears on screen.',
    'speed-bad-label':        'Other Extensions',
    'speed-bad-title':        'The Slow Way',
    'speed-bad-step1':        'New load data arrives at your computer',
    'speed-bad-step2':        'The page has to fully load before anything can happen',
    'speed-bad-step3':        'The extension reads the load info off the finished page',
    'speed-bad-step4':        'Finally checks if the load matches your settings',
    'speed-bad-result':       '&#10005; By the time it reads the load, other drivers already booked it',
    'speed-good-label':       'Prohauling Relay',
    'speed-good-title':       'The Fast Way',
    'speed-good-step1':       'New load data arrives at your computer',
    'speed-good-step2':       'Prohauling Relay picks up the load data instantly — before the page even starts loading',
    'speed-good-step3':       'Checks your filters in less than a second',
    'speed-good-step4':       'Books the load while other extensions are still waiting for the page to load',
    'speed-good-result':      '&#10003; You get the load before anyone else even sees it',

    /* Features */
    'features-label':         'Full Feature Set',
    'features-title':         'Everything a <em style="font-style:italic;color:var(--orange);">serious</em> carrier needs',
    'features-sub':           'Built by carriers, for carriers. No fluff — just the tools that put money in your pocket.',
    'feat1-title':            '4-Step Auto-Booking Engine',
    'feat1-desc':             'When a matching load appears, the engine opens it, waits your countdown, and confirms the booking — all without you touching anything. <strong>Fast Book mode</strong> skips the confirmation step entirely, getting you the load in the shortest time possible.',
    'feat2-title':            '9-Dimension Real-Time Filtering',
    'feat2-desc':             'Every incoming load is evaluated against <strong>9 filter criteria simultaneously</strong>: minimum total payout, minimum $/mile, maximum distance, origin states, destination states, equipment type, platform AI score (0–100), minimum pay/hour, and duplicate suppression. A load must pass every active filter before any action is taken.',
    'feat3-title':            '5-Channel Alert System',
    'feat3-desc':             'All five channels fire simultaneously on a qualifying load: <strong>audio alert</strong> (custom sound library), <strong>voice synthesis</strong> (speaks payout, route, rate out loud), <strong>Telegram message</strong> to your phone, <strong>visual overlay banner</strong> on the load board, and <strong>flash animation</strong> on the load card. Never miss a load whether you\'re watching the screen or not.',
    'feat5-title':            'Schedule &amp; Shift Hours',
    'feat5-desc':             'Define up to <strong>5 time windows per week</strong>. Auto-booking activates only during your configured shift hours. Outside your schedule, the monitor still watches and alerts — it just won\'t book without you.',
    'feat6-title':            'Fleet &amp; Multi-Driver Management',
    'feat6-desc':             'Running a small fleet? Create <strong>independent driver profiles</strong>, each with its own filter set, Telegram target, alert preferences, and schedule. Switch between drivers in one click.',
    'feat7-title':            'Reads Data Before It Hits the Screen',
    'feat7-desc':             'Prohauling Relay captures load data the instant it\'s downloaded — before it even appears on the page. That\'s why it\'s faster than any tool that waits for the page to load. Visual changes to the load board have zero effect on how it works.',
    'feat8-title':            '25 Themes &amp; Spanish Support',
    'feat8-desc':             'Choose from <strong>25 color themes</strong> to match your style. Full <strong>English and Spanish</strong> language support throughout the interface — for drivers and dispatchers who work in both.',

    /* How It Works */
    'hiw-label':              'Get Running in Minutes',
    'hiw-title':              'Three steps to hands-free hauling',
    'step1-title':            'Install &amp; Configure',
    'step1-desc':             'Add Prohauling Relay to Chrome. Enter your license key, set your minimum payout, preferred lanes, equipment type, and the schedule windows you want to work. Takes about five minutes.',
    'step2-title':            'Extension Monitors 24/7',
    'step2-desc':             'Open the load board and leave it running. Prohauling Relay intercepts every API response in the background — scanning new loads the instant they appear, around the clock.',
    'step3-title':            'Best Loads Get Booked',
    'step3-desc':             'A qualifying load triggers all 5 alert channels at once and starts the auto-book countdown. All 4 booking steps execute automatically. If you want to cancel, you have the window. If you don\'t — the load is yours. Your phone rings. You drive.',

    /* Overview */
    'overview-label':  'What It Does',
    'overview-title':  'Everything on one screen. Running 24/7.',
    'overview-sub':    'The most powerful load monitoring tool built for owner-operators, dispatchers, and trucking companies — runs directly on your load board and works completely automatically.',
    'ov1-title': 'Auto Book',
    'ov1-desc':  'Scans continuously and books matching loads automatically across up to <strong>5 independent slots</strong> — each with its own pay, route, trailer type, and schedule rules. No clicking, no waiting.',
    'ov2-title': 'Instant Driver Notifications',
    'ov2-desc':  'The moment a load is booked, drivers get a <strong>Telegram message + automatic voice call</strong> with full load details. They confirm or cancel with one tap — no app required.',
    'ov3-title': 'Built for Dispatchers &amp; Fleets',
    'ov3-desc':  'Manage <strong>unlimited drivers</strong>, each with their own trailer type, phone number, and preferred language. Set one active driver per session — all notifications go to them automatically.',
    'ov4-title': 'Smart Load Filtering',
    'ov4-desc':  '<strong>Min $/hr</strong>, AI Score priority, deadhead check, and duplicate detection work together to make sure only the right loads get through.',
    'ov5-title': 'Ban Protection Built In',
    'ov5-desc':  'Random refresh intervals mimic natural browsing. <strong>Auto-pause</strong> when the tab is idle, auto-resume when you return. No GPS data used.',
    'ov6-title': 'English &amp; Spanish',
    'ov6-desc':  'Full bilingual support for your entire team. Driver notifications are sent in each driver\'s <strong>preferred language</strong> — automatically.',

    /* Guides */
    'guides-label':           'Learn &amp; Set Up',
    'guides-title':           'Everything you need to get started',
    'guide1-title':           'Auto-Booking Setup Guide',
    'guide1-desc':            'Step-by-step walkthrough with real screenshots — add a driver, configure your slots, and turn on auto-booking in minutes.',
    'guide1-cta':             'View Setup Guide &rarr;',
    'guide2-title':           'Visual Guide',
    'guide2-desc':            '9-slide visual walkthrough of every feature — interface, alerts, auto-booking, deadhead check, filters, and more. Available in English and Spanish.',
    'guide2-cta':             'Open Visual Guide &rarr;',
    'guide3-title':           'Getting Started',
    'guide3-desc':            'New to Prohauling Relay? Follow the 5-step setup guide — from installing the extension to your first load alert. Includes Chrome safety notes and VPN tips.',
    'guide3-cta':             'Open Getting Started Guide &rarr;',

    /* Pricing */
    'pricing-label':          'Simple Pricing',
    'pricing-title':          'Start free. Pay only when you\'re ready.',
    'pricing-sub':            '7-day free trial on every plan — no credit card required at sign-up.',
    'plan1-name':             'Monthly',
    'plan1-period':           'per month &nbsp;·&nbsp; full access',
    'plan1-f1':               'Auto-booking with countdown cancel',
    'plan1-f2':               '9-dimension real-time filtering',
    'plan1-f3':               'Telegram + phone call alerts',
    'plan1-f4':               'Voice announcements',
    'plan1-f5':               'Schedule / shift-hours module',
    'plan1-f6':               'Fleet &amp; multi-driver profiles',
    'plan1-f7':               '25 themes · English &amp; Spanish',
    'plan1-cta':              'Start 7-Day Free Trial',
    'plan2-badge':            'BEST VALUE',
    'plan2-name':             'Yearly',
    'plan2-period':           'per year &nbsp;·&nbsp; that\'s $33.33/mo',
    'plan2-save':             '&#10003; SAVE 33% &nbsp;·&nbsp; 2 months free',
    'plan2-f1':               'Everything in Monthly',
    'plan2-f2':               'Best per-month rate — lock it in',
    'plan2-f3':               'Priority support',
    'plan2-f4':               'All future feature updates included',
    'plan2-cta':              'Start 7-Day Free Trial',
    'pricing-trial-note':     '<strong>7-day free trial</strong> — no credit card required. Full access from day one. Cancel any time from the extension settings.',

    /* FAQ */
    'faq-label':              'FAQ',
    'faq-title':              'Common questions',
    'faq1-q':                 'Is using this extension against the platform\'s Terms of Service?',
    'faq1-a':                 'We can\'t provide legal advice, and Terms of Service can change. Prohauling Relay automates actions you could perform manually — monitoring the load board and clicking Book. You are responsible for ensuring your use complies with any agreements between you and the platform. We recommend reading the current carrier agreement and using the tool in a way you\'re comfortable with.',
    'faq2-q':                 'Will it book loads I don\'t want?',
    'faq2-a':                 'Only loads that pass every filter you configure will trigger auto-booking. You set the minimum payout, minimum $/mile, origin and destination states, equipment type, and more. On top of that, every auto-book has a configurable countdown window (default 5 seconds) — if you see the alert and want to cancel, you have time to do so. You stay in control at all times.',
    'faq3-q':                 'What if the load board changes?',
    'faq3-a':                 'Because Prohauling Relay intercepts raw API responses — not rendered HTML — it is completely independent of how the page looks. The load board\'s front-end can be fully redesigned and the extension keeps working. Only a change to the underlying JSON data structure of the API response itself would require an update. That type of change is far less frequent than a visual redesign, and when it does happen, an update is pushed quickly.',
    'faq4-q':                 'Do I need to leave my computer on?',
    'faq4-a':                 'Yes. Prohauling Relay runs as a Chrome extension inside your browser. Your computer needs to be on and Chrome needs to have the load board open for the extension to monitor and auto-book loads. For overnight or unattended monitoring, many carriers leave a dedicated laptop running with Chrome open to the load board.',
    'faq5-q':                 'Can I use it for multiple drivers in my fleet?',
    'faq5-a':                 'Yes. The fleet management module lets you create multiple driver profiles, each with its own independent filter configuration, Telegram notification target, phone alert numbers, and schedule windows. Switch between active driver profiles with one click. One license covers all your profiles on the same installation.',
    'faq6-q':                 'Is the 7-day trial really free? No credit card?',
    'faq6-a':                 'Yes — completely free, no credit card required to start. You get full access to every feature for 7 days. At the end of the trial, you can choose a Monthly or Yearly plan to continue. If you don\'t subscribe, the extension simply stops working — there are no surprise charges.',
    'faq7-q':                 'What happens when a load is booked overnight?',
    'faq7-a':                 'While you sleep, Prohauling Relay scans Amazon Relay every 5 seconds. When a load matches your filters it books it automatically, calls your phone to wake you up, and sends a Telegram message with the full load details — pickup address, delivery address, pay, rate per mile, distance, and a Google Maps navigation link. You wake up, read the message, and get in the truck. Already booked.',
    'faq8-q':                 'Does the driver need access to Amazon Relay at home?',
    'faq8-a':                 'No. The dispatcher sets up the schedule slots from the office. The driver only needs their phone. When a load is booked, the driver gets a phone call and a Telegram message with everything they need to know. No laptop, no Amazon login required.',
    'faq9-q':                 'How does the phone call work?',
    'faq9-a':                 'When a load is booked automatically, Prohauling Relay immediately calls the driver\'s phone number. The call is the wake-up alarm. The driver picks up, hears the alert, and checks their Telegram message for the full load details.',
    'faq10-q':                'What information is in the Telegram message?',
    'faq10-a':                'The Telegram message includes everything the driver needs: full pickup address with a Google Maps navigation link, full delivery address, total pay, rate per mile, pay per hour, distance, deadhead miles, trip duration, pickup time and arrival window, number of stops, load type, and fuel or toll charges if applicable.',

    /* Footer */
    'footer-privacy':         'Privacy Policy',
    'footer-terms':           'Terms of Service',
    'footer-manual':          'Manual',
    'footer-license':         'Get License',
    'footer-contact':         'support@prohauling-relay.com',

    /* Auto-Book Setup */
    'autobook-label':         'Auto-Booking Setup',
    'autobook-title':         'Set it once. Let it work for you.',
    'autobook-sub':           'Auto-booking is off by default. You turn it on when you\'re ready. Here\'s how it works once you do.',
    'autobook-step1-title':   'Step 1 — Tell it what you want',
    'autobook-step1-desc':    'Open the extension and set your minimums: the lowest payout you\'ll accept, your minimum dollars per mile, the states you want to run from and to, and your equipment type. You can be as specific or as open as you want.',
    'autobook-step2-title':   'Step 2 — Set your countdown window',
    'autobook-step2-desc':    'Choose how many seconds the extension waits before booking — anywhere from 3 to 30 seconds. When a good load shows up, a countdown starts on your screen. If you want to cancel, just click. If you don\'t — it books for you.',
    'autobook-step3-title':   'Step 3 — Set your schedule (optional)',
    'autobook-step3-desc':    'Only want it to book loads on weekday mornings? Set your work windows. Auto-booking only runs during those hours. Outside your schedule, it still alerts you — it just won\'t book without you there.',
    'autobook-step4-title':   'Step 4 — Turn it on and walk away',
    'autobook-step4-desc':    'Flip the auto-booking switch, leave the load board open in Chrome, and you\'re done. The extension watches the board. When a load matches every filter you set, it opens it, waits for your countdown, and books it — no clicks needed.',
    'autobook-step5-title':   'Step 5 — Set up your Telegram &amp; phone alerts',
    'autobook-step5-desc':    'Every qualifying load triggers all your alerts at once. Here\'s how to set them up:<br><br><strong>Telegram:</strong> Open Telegram, search for <strong>@GetMyid_Bot</strong> and send it any message — it replies with your numeric Chat ID. Paste that ID into the extension settings. From that point on, every matching load sends you a message like this:<br><div style="background:#1a1a1a;border:1px solid rgba(255,128,0,0.2);border-radius:8px;padding:12px 14px;margin:10px 0;font-size:12px;color:rgba(255,255,255,0.7);font-family:monospace;line-height:1.9;overflow-x:auto;max-width:100%;width:100%;box-sizing:border-box;">🚛 <strong style="color:#FF8000;">QUALIFYING LOAD — AUTO-BOOKED</strong><br>💰 Payout: <strong style="color:#fff;">$2,840</strong><br>💵 Rate: <strong style="color:#fff;">$5.82/mi</strong> &nbsp;·&nbsp; <strong style="color:#fff;">$38.40/hr</strong><br>📍 Pickup: <strong style="color:#fff;">1400 S Kostner Ave, Chicago, IL 60623</strong><br>🏁 Delivery: <strong style="color:#fff;">2828 Merrell Rd, Dallas, TX 75229</strong><br>📏 Distance: <strong style="color:#fff;">487 mi</strong> &nbsp;·&nbsp; Deadhead: <strong style="color:#fff;">12 mi</strong><br>⏱ Duration: <strong style="color:#fff;">7h 22m</strong><br>🕐 Pickup: <strong style="color:#fff;">06:00 – 08:00</strong> &nbsp;·&nbsp; Arrive by: <strong style="color:#fff;">14:00</strong><br>📦 Stops: <strong style="color:#fff;">1</strong> &nbsp;·&nbsp; Type: <strong style="color:#fff;">Dry Van</strong><br>🗺 <span style="color:#FF8000;">Open in Google Maps →</span></div><strong>Phone call:</strong> Enter your driver\'s phone number in the Driver settings. When a load matches, the extension places an automated call that speaks the load details out loud — payout, route, and distance.<br><br><span style="color:rgba(255,255,255,0.6);">This is especially useful during <strong style="color:#fff;">late-night shifts</strong>. If a driver is monitoring loads but gets drowsy, the phone call acts as an alarm — it rings even when the screen is locked or the driver stepped away. A load worth $3,000 at 2 AM won\'t go unnoticed.</span>',
    'autobook-step6-title':   'You\'re always in control',
    'autobook-step6-desc':    'Auto-booking will never book a load that doesn\'t match your filters. The countdown window gives you time to cancel any booking before it goes through. You can turn it off with one click at any time.',
    'autobook-setup-btn-text': 'Step-by-Step Setup Guide with Screenshots'
  },

  es: {
    /* Nav */
    'nav-how-it-works':       'Cómo Funciona',
    'nav-features':           'Funciones',
    'nav-visual-guide':       'Guía Visual',
    'nav-pricing':            'Precios',
    'nav-faq':                'Preguntas',
    'nav-cta':                'Comenzar Gratis',
    'mobile-nav-how-it-works':'Cómo Funciona',
    'mobile-nav-features':    'Funciones',
    'mobile-nav-visual-guide':'Guía Visual',
    'mobile-nav-pricing':     'Precios',
    'mobile-nav-faq':         'Preguntas',
    'mobile-lang-label':      'Idioma:',
    'mobile-cta':             'Comenzar Gratis',

    /* Hero */
    'hero-eyebrow':           '<span>&#9889;</span> Velocidad de Red · Auto-Reserva · Relay Platform',
    'hero-h1':                'Deja de Mirar el Tablero.<br><span>Activa el Autobook.</span>',
    'hero-sub':               'Configura tus tarifas, tus rutas y tu horario — y aléjate. Carga encontrada. Teléfono suena. Ya reservada. Prohauling Relay reserva las cargas correctas automáticamente, de noche, mientras duermes. Tú solo maneja.',
    'hero-cta-primary':       'Prueba Gratis 7 Días',
    'hero-cta-secondary':        'Ver Precios',
    'hero-cta-tutorial-text':    'Guía de Configuración de Auto-Reserva Paso a Paso con Imágenes',
    'hero-note':              'Sin tarjeta de crédito &nbsp;·&nbsp; 7 días gratis &nbsp;·&nbsp; Cancela cuando quieras',
    'hero-installed-link':    '¿Ya instalaste? Ver Cómo Empezar →',

    /* Mock UI */
    'mock-monitoring':        'Monitoreo activo',
    'mock-live':              'EN VIVO',
    'mock-meets-filters':     'Cumple filtros',

    /* Stats */
    'stat-filter':            'Dimensiones de Filtro',
    'stat-alert':             'Canales de Alerta',
    'stat-schedule':          'Ventanas de Horario',
    'stat-themes':            'Temas de Color',
    'stat-trial':             'Días de Prueba Gratis',

    /* Speed */
    'speed-label':            'Ventaja de Velocidad',
    'speed-title':            'Tú la ves primero. Tú la reservas primero.',
    'speed-sub':              'La mayoría de las herramientas esperan a que toda la página cargue antes de poder leer una carga. Para entonces, otro conductor ya la reservó. Prohauling Relay funciona diferente — agarra los datos de la carga en el instante en que llegan a tu computadora, antes de que aparezca nada en pantalla.',
    'speed-bad-label':        'Otras Extensiones',
    'speed-bad-title':        'La Manera Lenta',
    'speed-bad-step1':        'Los nuevos datos de carga llegan a tu computadora',
    'speed-bad-step2':        'La página tiene que cargar por completo antes de que pase algo',
    'speed-bad-step3':        'La extensión lee la información de la carga de la página terminada',
    'speed-bad-step4':        'Finalmente verifica si la carga coincide con tu configuración',
    'speed-bad-result':       '&#10005; Para cuando lee la carga, otros conductores ya la reservaron',
    'speed-good-label':       'Prohauling Relay',
    'speed-good-title':       'La Manera Rápida',
    'speed-good-step1':       'Los nuevos datos de carga llegan a tu computadora',
    'speed-good-step2':       'Prohauling Relay toma los datos al instante — antes de que la página empiece a cargar',
    'speed-good-step3':       'Verifica tus filtros en menos de un segundo',
    'speed-good-step4':       'Reserva la carga mientras otras extensiones aún esperan que cargue la página',
    'speed-good-result':      '&#10003; Consigues la carga antes de que cualquier otro la vea',

    /* Features */
    'features-label':         'Funciones Completas',
    'features-title':         'Todo lo que un transportista <em style="font-style:italic;color:var(--orange);">serio</em> necesita',
    'features-sub':           'Construido por transportistas, para transportistas. Sin relleno — solo las herramientas que ponen dinero en tu bolsillo.',
    'feat1-title':            'Motor de Auto-Reserva en 4 Pasos',
    'feat1-desc':             'Cuando aparece una carga que coincide, el motor la abre, espera tu cuenta regresiva y confirma la reserva — todo sin que toques nada. El modo <strong>Fast Book</strong> omite el paso de confirmación por completo, consiguiéndote la carga en el menor tiempo posible.',
    'feat2-title':            'Filtrado en Tiempo Real de 9 Dimensiones',
    'feat2-desc':             'Cada carga que llega es evaluada contra <strong>9 criterios de filtro simultáneamente</strong>: pago total mínimo, $/milla mínimo, distancia máxima, estados de origen, estados de destino, tipo de equipo, puntuación de IA de la plataforma (0–100), pago mínimo por hora y supresión de duplicados. Una carga debe pasar todos los filtros activos antes de que se tome cualquier acción.',
    'feat3-title':            'Sistema de Alertas de 5 Canales',
    'feat3-desc':             'Los cinco canales se disparan al mismo tiempo al detectar una carga calificada: <strong>alerta de audio</strong> (biblioteca de sonidos personalizada), <strong>síntesis de voz</strong> (anuncia el pago, ruta y tarifa en voz alta), <strong>mensaje de Telegram</strong> a tu teléfono, <strong>banner visual</strong> en el tablero de cargas y <strong>animación de destello</strong> en la tarjeta de carga. No te pierdes ninguna carga, estés mirando la pantalla o no.',
    'feat5-title':            'Horario y Turnos de Trabajo',
    'feat5-desc':             'Define hasta <strong>5 ventanas de tiempo por semana</strong>. La auto-reserva se activa solo durante tus turnos configurados. Fuera de tu horario, el monitor sigue vigilando y alertando — solo que no reservará sin ti.',
    'feat6-title':            'Gestión de Flota y Múltiples Conductores',
    'feat6-desc':             '¿Tienes una flota pequeña? Crea <strong>perfiles de conductor independientes</strong>, cada uno con su propio conjunto de filtros, destino de Telegram, preferencias de alerta y horario. Cambia entre conductores con un solo clic.',
    'feat7-title':            'Lee los Datos Antes de que Aparezcan en Pantalla',
    'feat7-desc':             'Prohauling Relay captura los datos de la carga en el instante en que se descargan — antes de que aparezcan en la página. Por eso es más rápido que cualquier herramienta que espera a que cargue la página. Los cambios visuales en el tablero no tienen ningún efecto en su funcionamiento.',
    'feat8-title':            '25 Temas y Soporte en Español',
    'feat8-desc':             'Elige entre <strong>25 temas de color</strong> para personalizar tu estilo. Soporte completo en <strong>inglés y español</strong> en toda la interfaz — para conductores y despachadores que trabajan en los dos idiomas.',

    /* How It Works */
    'hiw-label':              'Listo en Minutos',
    'hiw-title':              'Tres pasos para transporte sin manos',
    'step1-title':            'Instala y Configura',
    'step1-desc':             'Agrega Prohauling Relay a Chrome. Ingresa tu clave de licencia, configura tu pago mínimo, rutas preferidas, tipo de equipo y los turnos en que quieres trabajar. Toma unos cinco minutos.',
    'step2-title':            'La Extensión Monitorea 24/7',
    'step2-desc':             'Abre el tablero de cargas y déjalo corriendo. Prohauling Relay intercepta cada respuesta de la API en segundo plano — escaneando cargas nuevas en el instante en que aparecen, las 24 horas.',
    'step3-title':            'Las Mejores Cargas se Reservan',
    'step3-desc':             'Una carga calificada activa los 5 canales de alerta a la vez y arranca la cuenta regresiva de auto-reserva. Los 4 pasos de reserva se ejecutan solos. Si quieres cancelar, tienes la ventana. Si no — la carga es tuya. Tu teléfono suena. Tú manejas.',

    /* Overview */
    'overview-label':  'Qué Hace',
    'overview-title':  'Todo en una pantalla. Funcionando 24/7.',
    'overview-sub':    'La herramienta de monitoreo de cargas más poderosa para propietarios-operadores, despachadores y empresas de transporte — funciona directamente en tu tablero de cargas, de forma completamente automática.',
    'ov1-title': 'Auto-Reserva',
    'ov1-desc':  'Escanea continuamente y reserva cargas que coincidan con tus criterios en hasta <strong>5 ranuras independientes</strong> — cada una con sus propias reglas de pago, ruta, tipo de remolque y horario.',
    'ov2-title': 'Notificaciones Instantáneas',
    'ov2-desc':  'En el momento en que se reserva una carga, el conductor recibe un <strong>mensaje de Telegram + llamada de voz automática</strong> con todos los detalles. Confirma o cancela con un toque — sin app adicional.',
    'ov3-title': 'Hecho para Despachadores y Flotas',
    'ov3-desc':  'Administra <strong>conductores ilimitados</strong>, cada uno con su propio tipo de remolque, número de teléfono e idioma preferido. Establece un conductor activo por sesión — todas las notificaciones van a él automáticamente.',
    'ov4-title': 'Filtrado Inteligente de Cargas',
    'ov4-desc':  '<strong>Mínimo $/hr</strong>, prioridad por puntaje IA, control de deadhead y detección de duplicados aseguran que solo pasen las cargas correctas.',
    'ov5-title': 'Protección Anti-Ban Integrada',
    'ov5-desc':  'Intervalos de refresco aleatorios imitan el comportamiento humano. <strong>Pausa automática</strong> cuando la pestaña está inactiva, reanuda al volver. Sin uso de GPS.',
    'ov6-title': 'Inglés y Español',
    'ov6-desc':  'Soporte bilingüe completo para todo tu equipo. Las notificaciones a conductores se envían en el <strong>idioma preferido</strong> de cada uno — automáticamente.',

    /* Guides */
    'guides-label':           'Aprende y Configura',
    'guides-title':           'Todo lo que necesitas para empezar',
    'guide1-title':           'Guía de Configuración de Auto-Reserva',
    'guide1-desc':            'Tutorial paso a paso con capturas reales — agrega un conductor, configura tus ranuras y activa la auto-reserva en minutos.',
    'guide1-cta':             'Ver Guía de Configuración &rarr;',
    'guide2-title':           'Guía Visual',
    'guide2-desc':            'Recorrido visual de 9 diapositivas por cada función — interfaz, alertas, auto-reserva, control de deadhead, filtros y más. Disponible en inglés y español.',
    'guide2-cta':             'Abrir Guía Visual &rarr;',
    'guide3-title':           'Primeros Pasos',
    'guide3-desc':            '¿Nuevo en Prohauling Relay? Sigue la guía de 5 pasos — desde instalar la extensión hasta tu primera alerta de carga. Incluye notas de seguridad de Chrome y consejos sobre VPN.',
    'guide3-cta':             'Abrir Guía de Inicio &rarr;',

    /* Pricing */
    'pricing-label':          'Precios Simples',
    'pricing-title':          'Comienza gratis. Paga solo cuando estés listo.',
    'pricing-sub':            '7 días de prueba en cada plan — sin tarjeta de crédito al registrarte.',
    'plan1-name':             'Mensual',
    'plan1-period':           'por mes &nbsp;·&nbsp; acceso completo',
    'plan1-f1':               'Auto-reserva con cancelación por cuenta regresiva',
    'plan1-f2':               'Filtrado en tiempo real de 9 dimensiones',
    'plan1-f3':               'Alertas por Telegram + llamada telefónica',
    'plan1-f4':               'Anuncios de voz',
    'plan1-f5':               'Módulo de horario / turnos de trabajo',
    'plan1-f6':               'Flota y perfiles multi-conductor',
    'plan1-f7':               '25 temas · Inglés y Español',
    'plan1-cta':              'Prueba Gratis 7 Días',
    'plan2-badge':            'MEJOR VALOR',
    'plan2-name':             'Anual',
    'plan2-period':           'por año &nbsp;·&nbsp; eso es $33.33/mes',
    'plan2-save':             '&#10003; AHORRA 33% &nbsp;·&nbsp; 2 meses gratis',
    'plan2-f1':               'Todo lo del plan Mensual',
    'plan2-f2':               'La mejor tarifa mensual — asegúrala ahora',
    'plan2-f3':               'Soporte prioritario',
    'plan2-f4':               'Todas las actualizaciones futuras incluidas',
    'plan2-cta':              'Prueba Gratis 7 Días',
    'pricing-trial-note':     '<strong>7 días de prueba gratis</strong> — sin tarjeta de crédito. Acceso completo desde el primer día. Cancela cuando quieras desde la configuración de la extensión.',

    /* FAQ */
    'faq-label':              'Preguntas Frecuentes',
    'faq-title':              'Preguntas comunes',
    'faq1-q':                 '¿Usar esta extensión va contra los Términos de Servicio de la plataforma?',
    'faq1-a':                 'No podemos dar asesoría legal, y los Términos de Servicio pueden cambiar. Prohauling Relay automatiza acciones que tú podrías hacer manualmente — monitorear el tablero de cargas y hacer clic en Reservar. Tú eres responsable de asegurarte de que tu uso cumple con los acuerdos que tienes con la plataforma. Te recomendamos leer el acuerdo actual de transportistas y usar la herramienta de una forma con la que te sientas cómodo.',
    'faq2-q':                 '¿Reservará cargas que no quiero?',
    'faq2-a':                 'Solo las cargas que pasen todos los filtros que configures activarán la auto-reserva. Tú estableces el pago mínimo, $/milla mínimo, estados de origen y destino, tipo de equipo y más. Además, cada auto-reserva tiene una ventana de cuenta regresiva configurable (5 segundos por defecto) — si ves la alerta y quieres cancelar, tienes tiempo de hacerlo. El control siempre está en tus manos.',
    'faq3-q':                 '¿Qué pasa si el tablero de cargas cambia?',
    'faq3-a':                 'Como Prohauling Relay intercepta las respuestas de la API en bruto — no el HTML renderizado — funciona completamente independiente de cómo se vea la página. El front-end del tablero puede rediseñarse por completo y la extensión sigue funcionando. Solo un cambio en la estructura del JSON de la respuesta de la API requeriría una actualización. Ese tipo de cambio ocurre con mucha menos frecuencia que un rediseño visual, y cuando sucede, la actualización se publica rápidamente.',
    'faq4-q':                 '¿Necesito dejar mi computadora encendida?',
    'faq4-a':                 'Sí. Prohauling Relay funciona como una extensión de Chrome dentro de tu navegador. Tu computadora debe estar encendida y Chrome debe tener abierto el tablero de cargas para que la extensión monitoree y reserve cargas. Para monitoreo nocturno o sin atención, muchos transportistas dejan una laptop dedicada encendida con Chrome abierto en el tablero.',
    'faq5-q':                 '¿Puedo usarlo para múltiples conductores en mi flota?',
    'faq5-a':                 'Sí. El módulo de gestión de flota te permite crear múltiples perfiles de conductor, cada uno con su propia configuración de filtros, destino de notificación de Telegram, números de alerta telefónica y ventanas de horario. Cambia entre perfiles de conductor activos con un clic. Una licencia cubre todos tus perfiles en la misma instalación.',
    'faq6-q':                 '¿La prueba de 7 días es realmente gratis? ¿Sin tarjeta de crédito?',
    'faq6-a':                 'Sí — completamente gratis, sin tarjeta de crédito para empezar. Tienes acceso completo a todas las funciones durante 7 días. Al terminar la prueba, puedes elegir un plan Mensual o Anual para continuar. Si no te suscribes, la extensión simplemente deja de funcionar — no hay cargos inesperados.',
    'faq7-q':                 '¿Qué pasa cuando se reserva una carga de madrugada?',
    'faq7-a':                 'Mientras duermes, Prohauling Relay escanea Amazon Relay cada 5 segundos. Cuando una carga coincide con tus filtros, la reserva automáticamente, te llama por teléfono para despertarte y te envía un mensaje de Telegram con todos los detalles: dirección de recogida, dirección de entrega, pago, tarifa por milla, distancia y enlace de navegación de Google Maps. Te despiertas, lees el mensaje y subes al camión. Ya está reservada.',
    'faq8-q':                 '¿El conductor necesita acceso a Amazon Relay desde casa?',
    'faq8-a':                 'No. El despachador configura los slots desde la oficina. El conductor solo necesita su teléfono. Cuando se reserva una carga, el conductor recibe una llamada y un mensaje de Telegram con todo lo que necesita saber. No se necesita computadora ni inicio de sesión en Amazon.',
    'faq9-q':                 '¿Cómo funciona la llamada telefónica?',
    'faq9-a':                 'Cuando se reserva una carga automáticamente, Prohauling Relay llama de inmediato al número de teléfono del conductor. La llamada es la alarma para despertar. El conductor contesta, escucha la alerta y revisa su mensaje de Telegram para ver los detalles completos de la carga.',
    'faq10-q':                '¿Qué información llega en el mensaje de Telegram?',
    'faq10-a':                'El mensaje de Telegram incluye todo lo que el conductor necesita: dirección completa de recogida con enlace de Google Maps, dirección completa de entrega, pago total, tarifa por milla, pago por hora, distancia, millas en vacío, duración del viaje, hora de recogida y ventana de llegada, número de paradas, tipo de carga y recargos de combustible o peaje si aplica.',

    /* Footer */
    'footer-privacy':         'Política de Privacidad',
    'footer-terms':           'Términos de Servicio',
    'footer-manual':          'Manual',
    'footer-license':         'Obtener Licencia',
    'footer-contact':         'support@prohauling-relay.com',

    /* Configuración Auto-Reserva */
    'autobook-label':         'Configuración de Auto-Reserva',
    'autobook-title':         'Configúralo una vez. Deja que trabaje por ti.',
    'autobook-sub':           'La auto-reserva está desactivada por defecto. Tú la enciendes cuando estés listo. Así es como funciona una vez que lo haces.',
    'autobook-step1-title':   'Paso 1 — Dile lo que quieres',
    'autobook-step1-desc':    'Abre la extensión y establece tus mínimos: el pago más bajo que aceptarás, tu mínimo de dólares por milla, los estados de donde quieres salir y llegar, y el tipo de equipo. Puedes ser tan específico o tan abierto como quieras.',
    'autobook-step2-title':   'Paso 2 — Configura tu ventana de cuenta regresiva',
    'autobook-step2-desc':    'Elige cuántos segundos espera la extensión antes de reservar — entre 3 y 30 segundos. Cuando aparece una buena carga, comienza una cuenta regresiva en tu pantalla. Si quieres cancelar, solo haz clic. Si no — reserva por ti.',
    'autobook-step3-title':   'Paso 3 — Configura tu horario (opcional)',
    'autobook-step3-desc':    '¿Solo quieres que reserve cargas las mañanas entre semana? Establece tus turnos de trabajo. La auto-reserva solo funciona durante esas horas. Fuera de tu horario, sigue alertándote — solo que no reservará sin que estés.',
    'autobook-step4-title':   'Paso 4 — Enciéndela y aléjate',
    'autobook-step4-desc':    'Activa el interruptor de auto-reserva, deja el tablero de cargas abierto en Chrome, y listo. La extensión vigila el tablero. Cuando una carga coincide con todos los filtros que configuraste, la abre, espera tu cuenta regresiva y la reserva — sin clics necesarios.',
    'autobook-step5-title':   'Paso 5 — Configura tus alertas de Telegram y teléfono',
    'autobook-step5-desc':    'Cada carga calificada activa todas tus alertas a la vez. Así se configuran:<br><br><strong>Telegram:</strong> Abre Telegram, busca <strong>@GetMyid_Bot</strong> y envíale cualquier mensaje — te responde con tu ID de Chat numérico. Pega ese ID en la configuración de la extensión. A partir de ese momento, cada carga que coincida te envía un mensaje así:<br><div style="background:#1a1a1a;border:1px solid rgba(255,128,0,0.2);border-radius:8px;padding:12px 14px;margin:10px 0;font-size:12px;color:rgba(255,255,255,0.7);font-family:monospace;line-height:1.9;overflow-x:auto;max-width:100%;width:100%;box-sizing:border-box;">🚛 <strong style="color:#FF8000;">CARGA CALIFICADA — RESERVADA</strong><br>💰 Pago: <strong style="color:#fff;">$2,840</strong><br>💵 Tarifa: <strong style="color:#fff;">$5.82/mi</strong> &nbsp;·&nbsp; <strong style="color:#fff;">$38.40/hr</strong><br>📍 Recogida: <strong style="color:#fff;">1400 S Kostner Ave, Chicago, IL 60623</strong><br>🏁 Entrega: <strong style="color:#fff;">2828 Merrell Rd, Dallas, TX 75229</strong><br>📏 Distancia: <strong style="color:#fff;">487 mi</strong> &nbsp;·&nbsp; En vacío: <strong style="color:#fff;">12 mi</strong><br>⏱ Duración: <strong style="color:#fff;">7h 22m</strong><br>🕐 Recogida: <strong style="color:#fff;">06:00 – 08:00</strong> &nbsp;·&nbsp; Llegada: <strong style="color:#fff;">14:00</strong><br>📦 Paradas: <strong style="color:#fff;">1</strong> &nbsp;·&nbsp; Tipo: <strong style="color:#fff;">Van Seca</strong><br>🗺 <span style="color:#FF8000;">Abrir en Google Maps →</span></div><strong>Llamada telefónica:</strong> Ingresa el número del conductor en la configuración del conductor. Cuando una carga coincide, la extensión realiza una llamada automática que habla los detalles en voz alta — pago, ruta y distancia.<br><br><span style="color:rgba(255,255,255,0.6);">Esto es especialmente útil durante los <strong style="color:#fff;">turnos nocturnos</strong>. Si un conductor está monitoreando cargas pero se queda dormido, la llamada actúa como alarma — suena incluso cuando la pantalla está bloqueada o el conductor se alejó. Una carga de $3,000 a las 2 AM no pasará desapercibida.</span>',
    'autobook-step6-title':   'Siempre tienes el control',
    'autobook-step6-desc':    'La auto-reserva nunca reservará una carga que no coincida con tus filtros. La ventana de cuenta regresiva te da tiempo para cancelar cualquier reserva antes de que se confirme. Puedes apagarla con un clic en cualquier momento.',
    'autobook-setup-btn-text': 'Guía de Configuración Paso a Paso con Imágenes'
  }
};

/* Mock UI labels per language — used by the countdown animation */
var mockLabels = {
  en: {
    autoBookingIn: 'Auto-booking in',
    loadBooked:    'Load booked!',
    bookNow:       'BOOK NOW',
    qualifying:    'QUALIFYING LOAD DETECTED',
    booked:        'LOAD BOOKED'
  },
  es: {
    autoBookingIn: 'Auto-reservando en',
    loadBooked:    '¡Carga reservada!',
    bookNow:       'RESERVAR',
    qualifying:    'CARGA CALIFICADA DETECTADA',
    booked:        'CARGA RESERVADA'
  }
};

function setLanguage(lang) {
  /* Update <html> lang attribute */
  document.documentElement.lang = lang;

  /* Apply all text translations */
  var map = translations[lang];
  Object.keys(map).forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = map[id];
  });

  /* Update mock card data-label (used by CSS ::before) */
  var mockCard = document.getElementById('mockLoadCard');
  if (mockCard) {
    mockCard.setAttribute('data-label', mockLabels[lang].qualifying);
    if (mockCard.classList.contains('booked')) {
      mockCard.setAttribute('data-label', mockLabels[lang].booked);
    }
  }

  /* Update countdown labels that the JS animation controls */
  window._currentLang = lang;
  var labelEl = document.getElementById('countdownLabel');
  var bookBtn = document.getElementById('bookBtn');
  if (labelEl && !document.getElementById('mockCountdown').classList.contains('booked')) {
    labelEl.textContent = mockLabels[lang].autoBookingIn;
  }
  if (bookBtn) bookBtn.textContent = mockLabels[lang].bookNow;

  /* Sync toggle button states — both desktop and mobile */
  ['Desktop', 'Mobile'].forEach(function(suffix) {
    var btnEn = document.getElementById('langBtnEn' + suffix);
    var btnEs = document.getElementById('langBtnEs' + suffix);
    if (btnEn && btnEs) {
      btnEn.classList.toggle('active', lang === 'en');
      btnEs.classList.toggle('active', lang === 'es');
    }
  });

  /* Persist choice */
  try { localStorage.setItem('lang', lang); } catch(e) {}
}

/* ─────────────────────────────────────────────────────────────── */

/* ─── THEME TOGGLE ─────────────────────────────────────────────
   Lets users manually override the OS light/dark preference.
   Saves choice to localStorage so it persists across visits.
─────────────────────────────────────────────────────────────── */
(function() {
  var saved = null;
  try { saved = localStorage.getItem('ph_theme'); } catch(e) {}
  if (saved === 'light') document.documentElement.classList.add('force-light');
  if (saved === 'dark')  document.documentElement.classList.add('force-dark');
})();

function toggleTheme() {
  var html = document.documentElement;
  var isLight = html.classList.contains('force-light') ||
    (!html.classList.contains('force-dark') && window.matchMedia('(prefers-color-scheme: light)').matches);
  if (isLight) {
    html.classList.remove('force-light');
    html.classList.add('force-dark');
    try { localStorage.setItem('ph_theme', 'dark'); } catch(e) {}
    syncThemeButtons('☀️');
  } else {
    html.classList.remove('force-dark');
    html.classList.add('force-light');
    try { localStorage.setItem('ph_theme', 'light'); } catch(e) {}
    syncThemeButtons('🌙');
  }
}

function syncThemeButtons(icon) {
  var b1 = document.getElementById('theme-toggle');
  var b2 = document.getElementById('theme-toggle-mobile');
  if (b1) b1.textContent = icon;
  if (b2) b2.textContent = icon;
}

document.addEventListener('DOMContentLoaded', function () {
  /* Apply saved or default language before anything is visible */
  var savedLang = 'en';
  try { savedLang = localStorage.getItem('lang') || 'en'; } catch(e) {}
  setLanguage(savedLang);

  /* Sync theme toggle icons with current mode */
  (function() {
    var isLight = document.documentElement.classList.contains('force-light') ||
      (!document.documentElement.classList.contains('force-dark') && window.matchMedia('(prefers-color-scheme: light)').matches);
    syncThemeButtons(isLight ? '🌙' : '☀️');
  })();

  initReveal();
  initCounters();
  initMockCountdown();
  initMobileMenu();
  initNavHighlight();
});

/* ─── 1. SCROLL REVEAL ─────────────────────────────────────────
   Uses IntersectionObserver to fade+slide elements in as they
   enter the viewport. Elements start invisible via CSS (.reveal).
─────────────────────────────────────────────────────────────── */
function initReveal() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function (el) {
    observer.observe(el);
  });
}

/* ─── 2. ANIMATED STAT COUNTERS ────────────────────────────────
   When a .stat-number scrolls into view, counts from 0 up to
   data-target using requestAnimationFrame over ~1.1 seconds.
─────────────────────────────────────────────────────────────── */
function initCounters() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el      = entry.target;
      var target  = parseInt(el.dataset.target, 10);
      var suffix  = el.dataset.suffix || '';
      var current = 0;
      var duration = 1100;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        current      = Math.floor(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
        }
      }

      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number[data-target]').forEach(function (el) {
    observer.observe(el);
  });
}

/* ─── 3. MOCK COUNTDOWN ANIMATION ──────────────────────────────
   Loops: counts 5 → 4 → 3 → 2 → 1 → shows BOOKED state →
   resets with a new random load → repeats indefinitely.
─────────────────────────────────────────────────────────────── */
function initMockCountdown() {
  var countdown = document.getElementById('mockCountdown');
  var timerEl   = document.getElementById('countdownTimer');
  var labelEl   = document.getElementById('countdownLabel');
  var bookBtn   = document.getElementById('bookBtn');
  var loadCard  = document.getElementById('mockLoadCard');
  if (!countdown || !timerEl) return;

  var loads = [
    { price: '$2,840', route: 'Chicago, IL → Dallas, TX · 487 mi', rate: '$5.82/mi' },
    { price: '$3,120', route: 'Atlanta, GA → Memphis, TN · 392 mi', rate: '$7.96/mi' },
    { price: '$1,980', route: 'Phoenix, AZ → Denver, CO · 598 mi', rate: '$3.31/mi' },
    { price: '$4,450', route: 'Los Angeles, CA → Seattle, WA · 1,135 mi', rate: '$3.92/mi' },
    { price: '$2,200', route: 'Houston, TX → Nashville, TN · 673 mi', rate: '$3.27/mi' }
  ];

  var loadIndex = 0;
  var seconds   = 5;
  var timer     = null;

  function getLang() { return window._currentLang || 'en'; }

  function setLoad(load) {
    document.getElementById('mockLoadPrice').textContent = load.price;
    document.getElementById('mockLoadRoute').innerHTML   = load.route;
    document.getElementById('mockLoadRate').textContent  = load.rate;
  }

  function tick() {
    if (seconds > 0) {
      timerEl.textContent = '0:0' + seconds;
      seconds--;
      timer = setTimeout(tick, 950);
    } else {
      showBooked();
    }
  }

  function showBooked() {
    var lang = getLang();
    countdown.classList.add('booked');
    loadCard.classList.add('booked');
    loadCard.setAttribute('data-label', mockLabels[lang].booked);
    labelEl.textContent = mockLabels[lang].loadBooked;
    timerEl.textContent = '✓ BOOKED';
    bookBtn.classList.add('pop');
    setTimeout(function () { bookBtn.classList.remove('pop'); }, 350);
    timer = setTimeout(reset, 2800);
  }

  function reset() {
    var lang = getLang();
    countdown.classList.remove('booked');
    loadCard.classList.remove('booked');
    loadCard.setAttribute('data-label', mockLabels[lang].qualifying);
    labelEl.textContent = mockLabels[lang].autoBookingIn;
    bookBtn.textContent  = mockLabels[lang].bookNow;
    timerEl.textContent = '0:05';
    seconds   = 5;
    loadIndex = (loadIndex + 1) % loads.length;
    setLoad(loads[loadIndex]);
    timer = setTimeout(tick, 1400);
  }

  timer = setTimeout(tick, 2000);
}

/* ─── 4. MOBILE HAMBURGER MENU ─────────────────────────────────
   Toggles the slide-down mobile nav. Closes on link click or
   outside click.
─────────────────────────────────────────────────────────────── */
function initMobileMenu() {
  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
}

/* ─── 5. NAV ACTIVE SECTION HIGHLIGHT ──────────────────────────
   Highlights the corresponding nav link as each section scrolls
   into the center of the viewport.
─────────────────────────────────────────────────────────────── */
function initNavHighlight() {
  var navLinks = document.querySelectorAll('.nav-links a[data-section]');
  var sectionIds = ['speed', 'features', 'how-it-works', 'pricing', 'faq'];

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  sectionIds.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

/* ─── 6. FAQ SMOOTH ACCORDION ──────────────────────────────────
   Opens one item at a time with a max-height CSS transition.
   Closing all first prevents jarring simultaneous transitions.
─────────────────────────────────────────────────────────────── */
function toggleFaq(btn) {
  var item     = btn.parentElement;
  var wasOpen  = item.classList.contains('open');

  document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
    openItem.classList.remove('open');
  });

  if (!wasOpen) {
    item.classList.add('open');
    item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* ─── 7. TRIAL EMAIL MODAL ─────────────────────────────────────
   Captures email → starts drip sequence → redirects to Chrome Store.
   License key is only sent after payment, not during trial.
─────────────────────────────────────────────────────────────── */
var CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/prohauling-relay/kffhjamcojjcihbnakfehcogdcdknheb';

function goToStore() {
  window.open(CHROME_STORE_URL, '_blank');
}
function openTrialModal() {
  window.location.href = 'welcome.html';
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeLightbox(); }
});

/* ─── 8. HERO CURSOR GLOW (CSS custom property tracking) ────────
   Updates --cursor-x and --cursor-y on the hero element so the
   radial gradient in .hero::before follows the mouse.
─────────────────────────────────────────────────────────────── */
(function() {
  var hero = document.querySelector('.hero');
  if (!hero) return;
  hero.addEventListener('mousemove', function(e) {
    var rect = hero.getBoundingClientRect();
    var x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + '%';
    var y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + '%';
    hero.style.setProperty('--cursor-x', x);
    hero.style.setProperty('--cursor-y', y);
  });
  hero.addEventListener('mouseleave', function() {
    hero.style.setProperty('--cursor-x', '50%');
    hero.style.setProperty('--cursor-y', '50%');
  });
})();

/* ─── LIGHTBOX ──────────────────────────────────────────────── */
function openLightbox(imgEl, e) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById('lightbox-img').src = imgEl.src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
// Show hint on mobile on first load
document.addEventListener('DOMContentLoaded', function() {
  var hints = document.querySelectorAll('.guide-thumb-hint');
  if (window.matchMedia('(hover: none)').matches) {
    hints.forEach(function(h) { h.style.opacity = '1'; });
  }
});

/* ─── CSP-SAFE EVENT WIRING (replaces onclick attributes blocked by CSP) ─── */
document.addEventListener('DOMContentLoaded', function() {
  function bindClick(id, fn) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('click', fn);
  }

  // Trial modal CTAs
  bindClick('nav-cta',        function(e) { e.preventDefault(); openTrialModal(); });
  bindClick('mobile-cta',     function(e) { e.preventDefault(); openTrialModal(); });
  bindClick('hero-cta-primary', function() { openTrialModal(); });
  bindClick('plan1-cta',      function() { openTrialModal(); });
  bindClick('plan2-cta',      function() { openTrialModal(); });

  // Modal controls
  bindClick('modal-submit-btn', function() { submitTrial(); });

  // Theme toggle
  bindClick('theme-toggle',        function() { toggleTheme(); });
  bindClick('theme-toggle-mobile', function() { toggleTheme(); });

  // Language buttons
  bindClick('langBtnEnDesktop', function() { setLanguage('en'); });
  bindClick('langBtnEsDesktop', function() { setLanguage('es'); });
  bindClick('langBtnEnMobile',  function() { setLanguage('en'); });
  bindClick('langBtnEsMobile',  function() { setLanguage('es'); });

  // Lightbox
  bindClick('lightbox',       function() { closeLightbox(); });
  bindClick('lightbox-close', function() { closeLightbox(); });

  // Modal close button (no id — select by proximity)
  var modalCloseBtn = document.querySelector('#trialModal > div > button');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', function() { closeTrialModal(); });

  // Modal success "Install Extension" button
  var installBtn = document.querySelector('#modal-success-view button');
  if (installBtn) installBtn.addEventListener('click', function() { goToStore(); });

  // FAQ — event delegation
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.faq-question');
    if (btn) toggleFaq(btn);
  });

  // Guide thumbnails — event delegation
  document.addEventListener('click', function(e) {
    var thumb = e.target.closest('.guide-thumb');
    if (thumb) openLightbox(thumb, e);
  });
});
