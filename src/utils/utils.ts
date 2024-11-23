export type Product = {
  src: string[];
  id: string;
  name: string;
  old: string;
  price: string;
  discount: string;
  offer: string;
  description: string;
};
export const Products: Product[] = [
  {
    src: ["/monitor2.webp"],
    id: "1",
    name: "Gaming Monitor Alienware 27'",
    old: "R$ 2.832,91",
    price: "R$ 2.599,00",
    offer: `Payable via Pix or up
to 12 installments of R$ 244,66`,
    discount: "-9%",
    description: `
       • Tamanho da tela: 27'
       • Tem uma resolução de 2560px-1440px 
       • Proporção da tela de 16:9 
       • Painel IPS 
       • Seu brilho é de 600cd/m² 
       • Com conexão USB-B 3.2 
       • É giratório e reclinável`,
  },
  {
    src: ["/mouse1.webp"],
    id: "2",
    name: "Wireless Mouse Alienware - Aw720m",
    old: "R$649,93",
    price: "R$ 618,99",
    offer: `Payable via Pix or up
to 12 installments of R$ 58,28`,
    discount: "-5%",
    description: `
      • Conectividade: USB 
      • Wireless 2.4 GHz 
      • Bluetooth 5.1 
      • Velocidade de Rastreamento 
      • 5 configurações 
      • DPI até 26.000 
      • Bateria: Polimero Litio de até 420 horas de duração  
      • Número de Botões: 8`,
  },
  {
    src: ["/headset1.webp"],
    id: "3",
    name: "Headset gamer Alienware",
    old: "R$916.92",
    price: "R$ 849,00",
    offer: `Payable via Pix or up
to 12 installments of R$ 79,94`,
    discount: "-8%",
    description: `
       • Compatibilidade: Windows
       • Conexões / tipo de conector
       • Fones de ouvido (USB)
      🔈 Modo de saída de som: Áudio de alta resolução
      • Formato: Microfone de fone de ouvido
      • Saída de áudio — Resposta de frequência 20 - 40000 Hz
      🗰 Garantia: Garantia limitada - 2 anos`,
  },
  {
    src: ["/teclado1.webp"],
    id: "4",
    name: "Gamer Keyboard Alienware - Aw920k",
    old: "R$ 2.014,88",
    price: "R$ 1.799,00",
    offer: `Payable via Pix or up
to 12 installments of R$ 169,40`,
    discount: "-12%",
    description: `
        Conectividade: Sem fio ou com cabo
       • Teclas de atalho: Programável com comutador basculante e botão rotativo
       ⌨ Tipo de switch da tecla: Vermelho MX Cereja
        Interface: USB 2.4 GHz, Bluetooth 5.1
      🔅 Iluminação traseira: AlienFX RGB por tecla / 16,8 milhões de cores
        Recursos: Teclado numérico`,
  },
  {
    src: ["/mochila1.webp"],
    id: "5",
    name: "Travel Backpack Alienware",
    old: "R$ 880,95",
    price: "R$ 839,00",
    offer: `Payable via Pix or up
to 12 installments of R$ 79,00`,
    discount: "-5%",
    description: `
      • Material do produto: Tecido 840D, Espuma EVA
      • Largura: 34.5 cm • Profundidade: 22 cm • Altura: 51 cm • Peso: 1.8 kg
      • Compatibilidade com Notebook: 18 Tamanhos de notebooks suportados, Até 18" / até 45,7 cm
      • Dimensões de compatibilidade com notebooks: 41 cm x 32 cm x 3.5 cm
      • Compartimentos adicionais Bolso frontal, 2x bolsos com fecho laterais, 2 bolsos de rede laterais, 
      • acessórios pequenos, próprio para ponto de inspeção
      • Características: Resistente ao tempo, à prova de choque, alça de ombro almofadada, parte posterior 
       almofadada, bolso de bloqueio com RFID, adequado a TSA, interior anti-riscos, processo de tingimento 
       de solução ecologicamente correto
      • Alça de transporte: Tira de trolley, alças para transporte no ombro, pegador superior de transporte, 
       cinta de esterno ajustável.
      • Material do forro: Nylex
      • Capacidade: 33 litros`,
  },
  {
    src: ["/notebook1.webp"],
    id: "6",
    name: "Notebook Dell Alienware - M18",
    old: "R$ 40.681,74",
    price: "R$ 38.379,00",
    offer: `Payable via Pix or up
to 12 installments of R$ 3.614,02`,
    discount: "-6%",
    description: `
      • Gaming Laptop •Most Suitable For •Serious Gaming
      • Model: Alienware m18 Laptop •Series: Alienware m18 Laptop •RAM Size: 16 •Operating System: Win 11
      • Processor: i9-13900HX •Storage Type:HDD (Hard Disk Drive) •Hard Drive Capacity:0 •Screen Size:18
      • Processor Speed: 5.4 •GPU: Nvidia GeForce RTX 4090 •MPN: Alienware m18 Laptop •Maximum Resolution: 2560x1600
      • Color: Dark Metallic Moon •Manufacturer Warranty: 1 •SSD Capacity: 512 •Graphics Processing Type: Dedicated Graphics`,
  },
  {
    src: ["/pc1.webp"],
    id: "7",
    name: "PC Gamer Dell Alienware - Aurora R15",
    old: "R$ 17.937,7",
    price: "R$ 15.598,99",
    offer: `Payable via Pix or up
to 12 installments of R$ 1.468,90`,
    discount: "-15%",
    description: `
      • 13ª geração Intel® Core™ i7-13700K (16-core, cache de 54MB, até 5.4GHz)
      • laptop: Windows 11 Home Single Language (português – Brasil)
      • videocard:NVIDIA® GeForce® RTX™ 4060, 8GB GDDR6
      • memory: 32GB DDR5 (2x16GB) 4800MT/s; Expansível até 64GB 5600MT/s (2 slots UDIMM)
      • harddrive: SSD de 512GB PCIe NVMe M.2
      • fallbackcolor: Chassi com 750W PSU, Alienware Cryo-tech ™ Edition CPU com sistema Liquid Cooler e painel transparente`,
  },
  {
    src: ["/teclado2.webp"],
    id: "8",
    name: "Teclado Dell Alienware - AW768 USB",
    old: "R$ 2.532,45",
    price: "R$ 2.302,23",
    offer: `Payable via Pix or up
to 12 installments of R$ 216,79`,
    discount: "-10%",
    description: `
      • Idioma: Inglês internacional
      • Layout: QWERTY
      • Cor da retroiluminação: RGB
      • Cor de teclado: Preto/Prata
      • Contém teclado numérico.
      • Função anti-ghosting integrada.
      • Tipo de teclado: mecânico.
      • Tecla cilíndrica.
      • Com conector: USB.
      • Medidas: 6.8" de altura, 19.6" de largura e 1.4" de profundidade.`,
  },
  {
    src: ["/notebook2.webp"],
    id: "9",
    name: "Notebook Dell Alienware - ALW18 ",
    old: "R$ 43.165,5",
    price: "R$ 41.110,00",
    offer: `Payable via Pix or up
to 12 installments of R$ 3.870,25`,
    discount: "-5%",
    description: `
      • Brand	Alienware
      • Model Name	Alienware M18 Gaming Laptop
      • Screen Size	18 Inches
      • Color	Dark Metallic Moon
      • Hard Disk Size	4 TB
      • CPU Model	Ryzen 9
      • Ram Memory Installed Size	64 GB
      • Operating System	Windows 11 Pro
      • Special Feature	Backlit Keyboard, Numeric Keypad
      • Graphics Card Description	Dedicated`,
  },
  {
    src: ["/cadeira1.webp"],
    id: "10",
    name: "Alienware S5000 Gaming Chair",
    old: "R$ 1.948,78",
    price: "R$ 1.739.99",
    offer: `Payable via Pix or up
to 12 installments of R$ 163,84`,
    discount: "-12%",
    description: `
     • ModeL: VG-S5000_AL	
     • Colors:	N/A	
     • Max Load: 150 kg / 330 lbs	
     • Recommended Height: up to 193cm / 6'4"	
     • Recommended Weight: up to 120kg / 260lb	
     • Materials:	 Steel (frame), UPHR Foam, PUC Leather, Aluminum Alloy (base)	
     • Package Dimension:	83 x 72 x 37.5 cm / 33 x 28 x 15 in	
     • Overall Height (incl. base):	1235-1335 mm / 48.6-52.6 in	
     • Backrest Width (shoulder):	 490 mm / 19.3 in	
     • Backrest Width (lumbar):	520 mm / 20.5 in	
     • Seat Width: 575 mm / 22.6 in	
     • Seat Depth: 480 mm / 19 in	
     • Net Weight: 27.5 kg / 60 lbs	
     • Gross Weight: 28 kg / 62 lbs`,
  },
  {
    src: ["/monitor3.webp"],
    id: "11",
    name: "Gaming Monitor Curved 34'- Alienware",
    old: "R$ 8.184,43",
    price: "R$ 7.649,00",
    offer: `Payable via Pix or up
to 12 installments of R$ 720,28`,
    discount: "-7%",
    description: `
      • Tamanho na diagonal: 34"
      • Taxa de atualização: Resolução WQHD 3440 x 1440 (DisplayPort: 144 Hz HDMI: 100 Hz)
      • Sincronização adaptável: AMD FreeSync Premium Pro
    🕑Tempo de resposta: 2 ms (cinza a cinza); 1 ms (MPRT)
      • Portas: 2 x HDMI, DisplayPort 1.4
      • Cabos: 1 x cabo HDMI, 1 x Cabo DisplayPort 1.4 - DisplayPort à DisplayPort`,
  },
  {
    src: ["/mouse3.avif"],
    id: "12",
    name: "Wireless Mouse Alienware - Aw610m ",
    old: "RS 615,60",
    price: "R$ 586,29",
    offer: `Payable via Pix or up
to 12 installments of R$ 55,20`,
    discount: "-5%",
    description: `
      Dimensões e peso:

      • Altura: 37,80 mm (1,49")
      • Largura: 61,70 mm (2,43")
      • Profundidade: 125,20 mm (4,93 pol.)
      • Peso inicial: 89 g (0,20 lb)
      • Tecnologia de conectividade: Tri-Mode
      • Conectividade: 1 x USB - USB tipo A de 4 pinos
      • Resolução de movimento (DPI): 26000 ppp
      • Botões: 8
      • Acessórios incluídos: Dispositivo extensor e dispositivo USB-C
      • Interface: USB, 2.4 GHz, Bluetooth 5.1`,
  },
];
