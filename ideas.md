# Antalya Europcar Guide — Tasarım Kararları

## Alternatif Yaklaşımlar

### 1. Terminal Signal
**Very Brief Intro:** Havalimanı yön bulma sistemlerinin netliğini, sıcak Akdeniz renkleri ve modern mobil navigasyon davranışlarıyla birleştiren yüksek kontrastlı bir arayüz.

**Probability:** 0.07

### 2. Mediterranean Paper
**Very Brief Intro:** Antalya’nın açık hava, taş, güneş ve deniz hissini; krem kâğıt yüzeyler, terracotta işaretler ve editoryal tipografiyle sakin bir rehber deneyimine dönüştüren yaklaşım.

**Probability:** 0.04

### 3. Night Transfer
**Very Brief Intro:** Gece uçuşu ve transfer deneyimini merkezine alan, lacivert yüzeyler ve amber ışık işaretleriyle çalışan koyu temalı bir havalimanı navigasyon sistemi.

**Probability:** 0.09

## Seçilen Yaklaşım: Terminal Signal

### Design Movement
Contemporary wayfinding ve Swiss International Typographic Style’dan beslenen, ancak havalimanı operasyonel arayüzünü Antalya’nın güneşli ve insani atmosferiyle yumuşatan bir yön.

### Core Principles
1. **Bir bakışta yön:** Kullanıcı terminalden çıktığında ilk ekranda hangi ofise gideceğini anlamalıdır.
2. **Operasyonel netlik:** Renk, ikon ve mesafe bilgisi dekorasyon değil karar desteği olarak çalışmalıdır.
3. **Sıcak ama kurumsal:** Europcar’ın güven duygusu, Antalya’nın açık ve enerjik atmosferiyle dengelenmelidir.
4. **Önce hareket:** Harita, konum ve “yol tarifi” eylemi her ekranın doğal çıkış noktasıdır.

### Color Philosophy
Zeminler sıcak kırık beyaz ve açık kum tonlarında tutulur; böylece uzun süre bakılan harita deneyimi yorucu olmaz. İmza rengi, Europcar sarısını taklit etmek yerine **sunset coral** (#F05A47) olarak tanımlanır: canlı, fark edilir ve kritik ofis işaretlerini çevreden ayırır. Koyu petrol (#163A3D) güven, yön ve metin kontrastını taşır; turkuaz ise aktif konum ve canlılık için yardımcı sinyaldir.

### Layout Paradigm
Merkezi bir dashboard yerine, ekranı dikey bir **yolculuk şeridi** gibi kurguluyoruz: üstte kullanıcının bağlamı, ortada haritanın görsel kanıtı, altta ise bir sonraki fiziksel hareketi söyleyen sabit eylem alanı. Mobilde kartlar haritanın üzerine bindirilir; geniş ekranda ise harita ve yönlendirme paneli asimetrik iki kolon hâline gelir.

### Signature Elements
- Terminal numarasını taşıyan büyük dairesel yol bulucu işaretleri.
- Harita üzerinde kesikli coral rota ve “şimdi buradasınız” konum halkası.
- Kartların üstünde, havalimanı tabelasını çağrıştıran ince amber bilgi şeritleri.

### Interaction Philosophy
Her etkileşim kullanıcının fiziksel olarak ilerlemesine yardım eder. Terminal seçimi bir filtre değil, “buradan çıkıyorum” kararıdır. Ofis kartına dokunmak ayrıntıyı açar; yol tarifi ise cihazın harita uygulamasına geçiş için açık bir köprü sunar. Konum izni verilmezse kullanıcı kilitlenmez; terminal seçimiyle manuel akış devam eder.

### Animation
Girişte harita ve yönlendirme kartı 180–240 ms aralığında snappy ease-out ile görünür. Ofis işaretleri 40 ms kademelerle hafifçe yükselir. Aktif konum halkası yalnızca reduced-motion kapalıyken yumuşak bir opacity/pulse ile çalışır. Butonlar basılı hâlde 0.97 ölçeğine iner; hiçbir animasyon layout ölçülerini değiştirmez.

### Typography System
Başlıklar için **Space Grotesk**; teknik, çağdaş ve yön bulma tabelası hissi verir. Gövde metni için **DM Sans**; okunaklı, insanî ve mobilde dengelidir. Başlıklar 700 ağırlıkta, kısa ve fiil odaklıdır. Yardımcı bilgiler 12–14 px, yüksek harf aralığı ve orta ağırlıkla etiketlenir.

### Brand Essence
Antalya Havalimanı’ndan Europcar ofisine giden yolculuğu, terminalden çıkış anında sadeleştiren güvenilir mobil rehber.

**Personality:** net, sıcak, hazır.

### Brand Voice
Başlıklar doğrudan ve fiziksel hareketi anlatır; CTA’lar belirsiz “devam et” yerine somut bir sonraki adımı söyler.

Örnek satırlar:
- “Hangi terminalden çıktınız?”
- “Ofise giden yolu aç”

### Wordmark & Logo
Metin yerine, iki paralel pist çizgisinin coral bir yön oku ile kesiştiği, yuvarlatılmış dikdörtgen içinde kompakt bir terminal işareti kullanılacak. Marka adı yanında küçük puntoda görünür; sembol tek başına favicon ve uygulama ikonu olarak da çalışır.

### Signature Brand Color
**Sunset Coral — #F05A47**

Bu renk, terminal işaretlerini uzaktan görünür kılar ve sıcak bir transfer deneyimi hissi verir.
