# Gerçek Harita Güncellemesi

- [x] Dekoratif harita katmanını kaldır ve gerçek harita katmanını görünür bırak.
- [x] Antalya Havalimanı merkezini gerçek harita görünümünde aç.
- [x] T1, T2 ve rent a car noktalarını geçici koordinatlarla işaretle; kesin koordinatların kullanıcıdan beklendiğini belirt.
- [x] Harita üstü etiketlerin gerçek haritayı kapatmadığını doğrula.
- [x] Mobil ekran görüntüsünde haritanın yüklendiğini kontrol et.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Google Maps Script Hatası

- [x] Google Maps script proxy URL'sinin ve yükleme davranışının kök nedenini teşhis et.
- [x] Script başarısız olduğunda konsola hata basmayan, gerçek harita fallback'ini koruyan akış uygula.
- [x] Mobil sayfada harita ve üretim derlemesini yeniden doğrula.
- [x] Hata düzeltmesini checkpoint olarak kaydet.

## Kesin Koordinatlar ve Google Maps

- [x] T2 Europcar ofisi koordinatını 36.899370, 30.799694 olarak tanımla.
- [x] Rent a car otoparkı koordinatını 36.914344, 30.804022 olarak tanımla.
- [x] İç hatlar terminali koordinatını 36.910780, 30.802042 olarak tanımla.
- [x] T2 Europcar shuttle bekleme noktasını 36.900453, 30.801735 olarak tanımla.
- [x] Google Maps katmanını gerçek harita olarak çalıştır; proxy URL'si güncellendi.
- [x] İşaretleri, bilgi kartlarını ve yol tarifi hedeflerini yeni koordinatlara bağla.
- [x] Mobil harita görünümünü ve üretim derlemesini doğrula.
- [x] Yeni sürümü checkpoint olarak kaydet.

## Anlık Konum ve Yönlendirme Akışı

- [x] Anlık konum iznini al ve konum durumlarını yönet.
- [x] Kullanıcının en yakın Europcar noktasını mesafe hesabıyla belirle.
- [x] Yürüme mesafesi ve tahmini varış süresini ekranda göster.
- [x] Terminal 2 için T2 Ofisi → T2 Shuttle Bekleme akışını ekle.
- [x] İç Hatlar için İç Hatlar Ofisi / Rent a Car Otoparkı seçim akışını ekle.
- [x] Harita ve Google Maps yol tarifi hedeflerini seçili akışa bağla.
- [x] Mobil görünüm, izin reddi ve build kontrollerini doğrula.
- [x] Yeni sürümü checkpoint olarak kaydet.

## Dil, Canlı Konum ve Google Directions

- [x] Türkçe, İngilizce, Almanca ve Fransızca dil çubuğu ekle.
- [x] Ana ekran ve yönlendirme metinlerini dört dile bağla.
- [x] Geolocation watchPosition ile canlı konum takibi ekle.
- [x] Google Maps üzerinde hareket eden mavi kullanıcı noktası göster.
- [x] Google DirectionsService ile WALKING rotası hesapla.
- [x] Gerçek rota mesafesi ve süresini kartta göster; fallback durumunu yönet.
- [x] Mobil ve masaüstü görünümünü, build ve hata akışlarını doğrula.
- [x] Yeni sürümü checkpoint olarak kaydet.

## Android APK Paketleme

- [x] Capacitor Android kabuğunu oluştur.
- [x] Android SDK ve Gradle toolchain kur.
- [x] Konum izinlerini Android manifest’e ekle.
- [x] Debug APK derle.
- [x] APK paket kimliğini ve imzasını doğrula.
- [x] APK teslim sürümünü kaydet.

## Profesyonel Android Revizyonu

- [x] Europcar temalı uygulama ikonu üret ve Android kaynaklarına ekle.
- [x] Europcar temalı splash ekranı üret ve Android kaynaklarına ekle.
- [x] Harita noktalarına tıklanınca fotoğraflı bilgi kartı göster.
- [x] INFO/BİLGİ, EMERGENCY/ACİL ve GOLDCAR ANTALYA telefonlarını hızlı arama kartlarına ekle.
- [x] Uygulama içi gerçek Google Maps yapılandırmasını hazırla; API anahtarı için yapılandırma desteği ekle.
- [x] Harita yüklenemediğinde Google hata ekranı yerine çalışan harita fallback’i göster.
- [x] APK’yi yeniden derle ve Android manifest/kaynaklarını doğrula.
- [x] Güncel APK sürümünü kaydet ve teslim et.

## İletişim Kartları ve WhatsApp

- [x] İletişim kartlarının yanında görünür WhatsApp logosu göster.
- [x] Kart tıklamasında Normal arama / WhatsApp seçim penceresi aç.
- [x] WhatsApp numaralarını uluslararası formatta oluştur.
- [x] WhatsApp yüklü değilse alternatif arama davranışını yönet.
- [x] Web/Android build ve tıklama akışını doğrula.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Dil ve Google Maps Revizyonu

- [x] Normal arama, WhatsApp ve iletişim seçim metinlerini TR/EN/DE/FR sözlüğüne ekle.
- [x] Google Maps harita URL’sini ana ve tek harita katmanı olarak kullan.
- [x] OpenStreetMap iframe fallback’ini kaldır.
- [x] Google Maps API anahtarı yoksa anlaşılır anahtar durumu göster; bozuk harita ekranı bırakma.
- [x] Dört dil, web build ve Android build kontrollerini yap.
- [x] Güncel sürümü checkpoint olarak kaydet.

## OpenStreetMap ve Özel Europcar Marker’ları

- [x] Harita katmanını OpenStreetMap’e geri döndür.
- [x] Europcar logolu özel marker görselini hazırla.
- [x] Ofis ve shuttle marker’larını özel görselle haritaya yerleştir.
- [x] Marker tıklamalarını fotoğraflı bilgi kartına bağla.
- [x] Mobil görünüm ve build kontrollerini yap.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Europcar Marka Teması Revizyonu

- [x] Pin görünümünü daha belirgin Europcar logo marker’ına dönüştür.
- [x] Sayfa renklerini Europcar yeşil/kırmızı/kremsi marka sistemine yaklaştır.
- [x] Header, hero, kartlar, butonlar ve iletişim alanında tutarlı marka hiyerarşisi uygula.
- [x] Mobil ve masaüstü görünümünü doğrula.
- [x] Android APK build’ini yenile.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Gönderilen Logo Görseli

- [x] Gönderilen Europcar görselini Android ikon kaynaklarına dönüştür.
- [x] Aynı görseli Android splash ekranına uygula.
- [x] Web favicon ve uygulama marka görselini güncelle.
- [x] Android build ve mobil görünümü doğrula.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Güncel Marka Renkleri

- [x] Ana yeşil rengi RGB (0,153,0) / #009900 olarak güncelle.
- [x] Menü ve beyaz yüzeyleri RGB (255,255,254) / #FFFFFE olarak düzenle.
- [x] Header, marker, buton ve kart kontrastlarını kontrol et.
- [x] Web/Android build’i doğrula.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Europcar Açılış Animasyonu

- [x] İlk açılışta #009900 yeşil splash katmanı göster.
- [x] Kullanıcının yeni Europcar logo görselini animasyonlu biçimde göster.
- [x] Sarı alt çizgi ve logo için kısa marka geçiş hareketi uygula.
- [x] Açılıştan ana ekrana yumuşak geçiş ekle.
- [x] prefers-reduced-motion durumunda animasyonu azalt.
- [x] Mobil/Android build ve ilk açılış davranışını doğrula.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Splash Sonrası Dil Karşılama Akışı

- [x] Splash ekranına “Moving your way” sloganını ekle.
- [x] Splash altına ilerleyen yükleme çubuğu ekle.
- [x] Splash sonrasında dil seçimi karşılama ekranı aç.
- [x] Türkçe, İngilizce, Almanca ve Fransızca dil seçimlerini bağla.
- [x] Logo dışındaki tüm sabit metinleri seçili dile göre çevir.
- [x] Terminal 2 Ofis ve diğer ofis adlandırmalarını dört dilde düzelt.
- [x] Mobil/Android build ve ilk açılış sırasını doğrula.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Bayraklı Dil Menüsü ve İç Hatlar Fotoğrafı

- [x] Türkçe, İngilizce, Almanca ve Fransızca bayraklarını ana menü dil açılır menüsüne ekle.
- [x] Menüden dil değişince tüm arayüz metinlerini anında güncelle ve seçimi koru.
- [x] Kullanıcının gönderdiği fotoğrafı kalıcı web varlığı olarak yükle.
- [x] Fotoğrafı İç Hatlar Terminali ofis kartına ve marker bilgi kartına bağla.
- [x] Mobil/masaüstü görünümünü ve web/Android build’i doğrula.
- [x] Güncel sürümü checkpoint olarak kaydet.

## İç Hatlar Fotoğraf Büyütme ve Kalıcı Dil

- [x] İç Hatlar fotoğraf kartında daha net boyutlandırma ve merkezleme uygula.
- [x] Fotoğrafa dokununca tam ekran büyütme modalı aç.
- [x] Modal için kapatma, erişilebilir etiket ve mobil dokunma davranışı ekle.
- [x] Dil seçimini localStorage’a kaydet ve açılışta otomatik yükle.
- [x] Build ve responsive görünümü doğrula.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Marker Hover ve Uzun Basma Bilgi Kartı

- [x] Marker üzerine gelince kısa ofis bilgi balonu göster.
- [x] Marker’a tıklayınca seçili ofis kartını güncelle.
- [x] Mobilde marker’a basılı tutunca aynı bilgi kartını aç.
- [x] Fotoğraf, ofis adı, mesafe ve yönlendirme bilgilerini seçili marker’a bağla.
- [x] Mobil/masaüstü etkileşimlerini ve build’i doğrula.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Gerçek Ofis Fotoğrafları

- [x] Gönderilen Terminal 2 fotoğrafını kalıcı web varlığına yükle.
- [x] Terminal 2 fotoğrafını marker ve bilgi kartına bağla.
- [x] Terminal 1 fotoğrafını kalıcı web varlığına yükle.
- [x] Terminal 1 fotoğrafını harita marker’ına ve detay kartına bağla.
- [x] Shuttle noktası için kullanıcı şu an fotoğraf sağlamadığı için fotoğrafsız bilgi kartı fallback’ini koru ve doğrula.
- [x] Fotoğraf kartlarını mobil görünümde doğrula.

## Google Play Store Release Hazırlığı

- [x] Android applicationId, versionCode, versionName ve target SDK değerlerini incele.
- [x] Release imzalama anahtarı ve güvenli keystore yapılandırmasını hazırla.
- [x] Play Store için signed Android App Bundle (.aab) oluştur.
- [x] AAB imzasını, paket kimliğini ve sürüm bilgilerini doğrula.
- [x] Play Console yükleme rehberi ve mağaza metadata taslağı hazırla.

## İmzalı Release APK

- [x] Aynı release imzasıyla doğrudan kurulabilir APK oluştur.
- [x] APK imzasını ve paket bilgilerini doğrula.
- [x] APK dosyasını kullanıcıya teslim et.

## Uygulama İçi Yol Tarifi

- [x] Mevcut canlı konum ve DirectionsService akışını incele.
- [x] Çok dilli “Yol Tarifi Al” butonunu seçili hedef kartına ekle.
- [x] Terminal ve shuttle hedeflerini mevcut konumdan yürüyüş rotasına bağla.
- [x] Konum izni reddedildiğinde anlaşılır geri bildirim göster.
- [x] Web/Android build ve mobil akışı doğrula.

## Yol Tarifi Tahmini Bilgi Kartı

- [x] Yol tarifi başlatma durumunu state ile göster.
- [x] Seçili hedef için tahmini yürüme süresi ve mesafe kartı ekle.
- [x] Google rota sonucu geldiğinde kartı gerçek mesafe/süre ile güncelle.
- [x] Kart metinlerini TR/EN/DE/FR dillerine bağla.
- [x] Web/Android build ve mobil görünümü doğrula.

## Harita Rota Durumu ve Görsel Vurgu

- [x] DirectionsService hesaplanırken harita üstü yükleme katmanı göster.
- [x] Yükleme metnini TR/EN/DE/FR dillerine bağla.
- [x] Rota hazır olduğunda yükleme katmanını kaldır.
- [x] Yürüyüş rotasını Europcar sarı/yeşil renk efektiyle belirginleştir.
- [x] prefers-reduced-motion desteğiyle animasyonu erişilebilir tut.
- [x] Web/Android build ve mobil görünümü doğrula.

## Kullanıcıdan Hedefe Rota Çizgisi

- [x] Rota geometri verisini harita bileşenine aktar.
- [x] Kullanıcı konumu ile seçili hedef arasında yürüyüş çizgisini çiz.
- [x] Rota yokken çizgiyi temizle ve yükleme/hata durumunu koru.
- [x] Rota çizgisini Europcar sarı/yeşil görsel vurgusuyla göster.
- [x] Web/Android build ve mobil görünümü doğrula.

## Konumumu Takip Et

- [x] Leaflet harita hareketlerini ve canlı konum güncellemelerini bağla.
- [x] Konumumu Takip Et butonunu çok dilli ekle.
- [x] Takip açıkken hareket eden kullanıcı konumuna otomatik pan yap.
- [x] Kullanıcı haritayı elle kaydırdığında takip durumunu güncelle.
- [x] Takip durumunu mobil görünümde doğrula.
- [x] İmzalı Android APK/AAB oluştur ve doğrula.

## Kullanıcı Seçimi ve Mobil Görünürlük Düzeltmeleri

- [x] Konum güncellemesinin selectedId değerini en yakın ofise değiştirmesini kaldır.
- [x] Kullanıcının seçtiği terminal/hedefi konum güncellemelerinde koru.
- [x] Mobil fotoğraf URL’lerini, object-fit ve kart taşmalarını düzelt.
- [x] Mobil Europcar pin ikonlarını, z-index ve marker katmanını düzelt.

## Yol Tarifi Konum Doğruluğu

- [x] Yol Tarifi Al tıklamasında yüksek doğruluklu güncel konum isteği yap.
- [x] Rota origin ve canlı kullanıcı noktasında aynı taze koordinatı kullan.
- [x] Konum reddedilirse rota başlatma ve hata durumunu koru.
- [x] T2 ve shuttle için yaya profilini, T3 için araç/yaya seçimini koru.
- [x] TypeScript, production build ve mobil etkileşimi doğrula.

## Fotoğraf Büyütme ve Offline Asset Paketi

- [x] Terminal 2 ve otopark fotoğraflarını dokunulabilir kartlara bağla.
- [x] Tam ekran fotoğraf önizleme ve mobil kapatma etkileşimi ekle.
- [x] Fotoğraf ve logoları /offline-assets altında Android bundle’a dahil et.
- [x] Capacitor web asset kopyasını, TypeScript ve production build’i doğrula.

## Haritaya Otomatik Kaydırma

- [x] Yol Tarifi Al başladığında harita bölümüne smooth scroll uygula.
- [x] Harita üzerinde rota yükleme ve özet katmanlarını görünür tut.
- [x] TypeScript ve production build’i doğrula.

## Header Logo Güncellemesi

- [x] Kullanıcının sağladığı yeşil zeminli beyaz E logosunu offline asset olarak ekle.
- [x] Sadece Home header marka alanını yeni logoya bağla; marker logolarını koru.
- [x] Web build ve Android web asset kopyasını doğrula.

## Çince, Rusça ve Harita Ulaşım Modu

- [x] Çince ve Rusça arayüz çevirilerini ekle; dil seçimini kalıcılaştır.
- [x] Harita yüksekliğini genişliği koruyarak mobil ve masaüstünde yüzde 75 düzeyine indir.
- [x] Harita üzerinde yaya/araç seçimlerini görünür kıl ve seçili profile göre rota isteği gönder.
- [x] TypeScript ve production build kontrollerini tamamla.

## Shuttle Servisi ve Yakıt İstasyonları

- [x] Antalya Havalimanı shuttle servis pinini 36.899912141304696, 30.802751335647972 koordinatında ekle.
- [x] Kullanıcının gönderdiği otobüs görselini offline shuttle fotoğrafı olarak bağla.
- [x] Verilen beş yakıt istasyonu koordinatını ayrı F1–F5 özel pinleriyle ekle.
- [x] Shuttle ve yakıt istasyonları için kategoriye özel pin görselleri oluştur.
- [x] İletişim başlığını altı dilde “Bize ulaşın / Contact us” karşılığına güncelle.
- [x] Vitest, TypeScript ve production build kontrollerini tamamla.

## Özgün Yakıt Görseli ve Ayrıştırılmış Shuttle Pinleri

- [x] Yakıt istasyonları için özgün görsel üret ve offline asset olarak ekle.
- [x] Havalimanı shuttle görselini kullanıcının son gönderdiği fotoğrafla değiştir.
- [x] Europcar shuttle bekleme pinini yeşil E sembolüyle, havalimanı shuttle pinini turuncu otobüs sembolüyle ayır.
- [x] Yakıt istasyonu bilgi kartlarına özgün görseli bağla.
- [x] Test ve production build kontrollerini tamamla.

## Kısa Yürüyüş Rotası Düzeltmesi

- [x] OSRM alternatif rotalarını iste ve en kısa geçerli rotayı seç.
- [x] Terminal çevresindeki aşırı dolambaçlı kısa yürüyüş rotalarını tespit et.
- [x] 600 m altındaki ve 2,4 katı aşan anlamsız yürüyüş sapmalarında kısa doğrudan yaya bağlantısı göster.
- [x] Test, TypeScript ve production build doğrulamasını tamamla.

## Tüm Yakın Yaya Hedeflerine Kısa Yol Uygulaması

- [x] Kısa-yol kontrolünü hedef türüne bağlı olmadan tüm yakın yaya rotalarına uygula.
- [x] T2/T3 ofisleri, Europcar shuttle, havalimanı shuttle ve otopark için ortak rota mantığını doğrula.
- [x] Uzun yaya rotalarında gerçek rota geometrisini koru.
- [x] Test, TypeScript ve production build kontrollerini tamamla.

## Yaya Tahmini Süre Hesabı

- [x] Kısa yaya bağlantısında metre/saniye hesabındaki çift dönüşümü düzelt.
- [x] 203 m için yaklaşık 2–3 dakika gösterildiğini doğrula.
- [x] Test, TypeScript ve production build kontrollerini tamamla.

## Bina İçinden Geçen Yaya Çizgisini Kaldırma

- [x] Doğrudan origin–destination yaya çizgisini kaldır.
- [x] Yaya rotasını yalnızca rota servisinin yol/geçiş geometrisinden çiz.
- [x] Bina veya kısıtlı alan içinden geçme riskini önle.
- [x] Test, TypeScript ve production build kontrollerini tamamla.

## T3 Hayır Seçeneği

- [x] T3 sorusunda Hayır seçilince doğrudan seçilen İç Hatlar ofisine rota başlat.
- [x] Evet seçilince mevcut Rent a Car otoparkı ve araç/yaya seçimi akışını koru.
- [x] Seçili yaya/araç profilini T3 ofis rotasında kullan.
- [x] Test ve TypeScript kontrolünü tamamla; güncelleme yayınlanmadan bekletiliyor.

## T2 Shuttle Görseli

- [x] Kullanıcının gönderdiği Europcar shuttle görselini optimize et.
- [x] Görseli offline asset olarak APK/web build içine paketle.
- [x] Görseli T2 Shuttle Bekleme pininin bilgi kartına bağla.
- [x] Test ve TypeScript kontrollerini tamamla; yayınlamadan beklet.

## Rent a Car Otoparkı Görseli

- [x] Kullanıcının gönderdiği Rent a Car ofis görselini optimize et.
- [x] Görseli offline asset olarak web/Android build içine paketle.
- [x] Görseli Rent a Car Otoparkı bilgi kartına bağla.
- [x] Test ve TypeScript kontrollerini tamamla; yayınlamadan beklet.

## Rent a Car Ana Teslim Noktası Açıklaması

- [x] Otopark bilgi kartına ana araç teslim noktası açıklaması ekle.
- [x] Açıklamayı Türkçe, İngilizce, Almanca, Fransızca, Çince ve Rusça çevir.
- [x] Test ve TypeScript kontrollerini tamamla; yayınlamadan beklet.

