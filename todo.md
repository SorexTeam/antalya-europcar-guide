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
- [ ] Shuttle noktası fotoğrafı henüz sağlanmadı; kullanıcı fotoğraf gönderdiğinde shuttle kartına ve marker detayına bağla.
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
- [x] Yol Tarifi Al ile seçilen hedefe uygulama içi rota çizimini doğrula.
- [x] Web/Android build, mobil ekran ve APK’yı doğrula.

## Görsel ve Rota Arızası Düzeltmesi

- [x] Görsel varlık URL’lerinin web ve Android içinde erişilebilir olduğunu doğrula.
- [x] Bozuk görsel fallback ve doğru object-fit davranışını düzelt.
- [x] Rota isteği için gerçek başlangıç/hedef ve DirectionsService durumunu doğrula.
- [x] Rota polyline’ını Leaflet katmanında görünür şekilde çiz.
- [x] Görselleri ve rota çizgisini mobil cihaz akışında doğrula.
- [x] Güncel imzalı APK/AAB oluştur.

## InvalidKeyMapError Düzeltmesi

- [x] Google Maps script’inin geçersiz anahtarla yüklenmesini kaldır.
- [x] OpenStreetMap/Leaflet haritasını uygulamanın tek harita yüzeyi olarak koru.
- [x] Yaya rota fallback’ini doğrudan kullan ve rota çizgisini koru.
- [x] Konsol hatası, web build ve Android APK’yı doğrula.

## Fotoğraf ve Logo Görüntü Düzeltmesi

- [x] Görsel formatlarını ve boyutlarını incele.
- [x] Web varlık URL’lerini ve Android asset kopyalamasını doğrula.
- [x] Logo ve fotoğraf fallback’lerini düzelt.
- [x] Marker ve kart görsellerini mobil görünümde doğrula.
- [x] İmzalı APK/AAB’yi yeniden oluştur.

## Offline Görseller, Skeleton ve Fotoğraf Üstü Rota Bilgisi

- [x] Logo ve terminal fotoğraflarını optimize edip paketlenmiş offline asset olarak ekle.
- [x] Web ve Android için offline asset yollarını ortaklaştır.
- [x] Harita ve terminal fotoğrafına skeleton yükleme durumu ekle.
- [x] Tahmini yürüme süresi ve mesafeyi fotoğrafın üstünde göster.
- [x] Web/mobil görünümü ve imzalı APK/AAB paketini doğrula.

## Harita Üstü Rota Tahmini

- [x] Süre/mesafe rozetini fotoğraf kartından kaldır.
- [x] Rota bilgilerini harita üstü katmanında göster.
- [x] Rota hesaplanırken harita rozetinde yükleme durumunu göster.
- [x] Mobil yerleşim, web build ve Android paketini doğrula.

## Harita Üstü Yol Tarifi Butonu

- [x] Yol Tarifi Al butonunu detay kartından kaldır.
- [x] Butonu harita üstü kontrol alanına ekle.
- [x] Rota yüklenirken buton durumunu güncelle.
- [x] Mobil yerleşim, web build ve Android paketini doğrula.

## Uçak Silüetli Uygulama İkonu

- [x] Mevcut Android launcher ikonlarını incele.
- [x] Europcar logosu arkasında uçak silüeti olan ikon tasarımını hazırla.
- [x] Launcher, splash ve favicon kaynaklarını yeni ikona bağla.
- [x] İmzalı APK/AAB oluştur ve ikon paketini doğrula.

## İkon Vurgusu ve Rota Tetikleme Düzeltmesi

- [x] Uçak silüetini belirginleştirip ikona ANTALYA ibaresini ekle.
- [x] Yeni ikonu launcher, splash ve favicon kaynaklarına uygula.
- [x] Rota isteğinin konum güncellemelerinde yeniden tetiklenmesini kaldır.
- [x] Rotayı yalnızca Yol Tarifi Al eylemine bağla.
- [x] Web/Android build ve imzalı APK/AAB’yi doğrula.

## Geniş Harita ve Harita İçi Menü

- [x] Mobil ve masaüstünde harita alanını büyüt.
- [x] Harita önizleme ve Konumumu Takip Et kontrollerini tek menüde topla.
- [x] OpenStreetMap/Europcar attribution bilgisini menü içine taşı.
- [x] Rota butonu ve süre/mesafe rozetinin menüyle çakışmadığını doğrula.
- [x] Web/Android build ve mobil görünümü doğrula.

## Tam Ekran Harita ve Modern Kontrol Menüsü

- [x] Harita için tam ekran açma/kapatma durumunu ekle.
- [x] Tam ekran görünümünde harita ve kontrolleri erişilebilir biçimde yerleştir.
- [x] Rota çizgisi, özet ve durumunu temizleyen eylemi ekle.
- [x] Harita menüsünü modern ikon, hiyerarşi ve dokunmatik alanlarla yenile.
- [x] Mobil görünüm, web build ve Android APK/AAB’yi doğrula.

## APK Güvenlik Uyarısı

- [x] APK sertifikasını ve release imzasını incele.
- [x] APK’nın debug olmadığını ve release imzasıyla paketlendiğini doğrula.
- [x] Play App Signing uyumlu AAB ve güvenli APK dağıtım yolunu hazırla.
- [x] Android kurulabilirliğini ve paket bilgilerini doğrula.

## Yeni Terminal Odaklı Yönlendirme Akışı

- [x] Ofis fotoğrafları görünümünü ve fotoğraf odaklı detay kartını kaldır.
- [x] Terminal seçimini yalnızca Dış Hatlar Terminal 2 (T2) ve İç Hatlar Terminali (T3) olarak düzenle.
- [x] T3 seçiminde rent a car otoparkı öneri ekranını göster.
- [x] T3 için araç/yaya ulaşım seçimini ekle ve rotayı seçime göre çiz.
- [x] T2 seçiminde Terminal 2 ofisi öncesi uyarısını göster.
- [x] T2 onayından sonra shuttle uyarısında 30–40 dakika yoğunluk bekleme bilgisini göster.
- [x] T2 onayında shuttle bekleme alanına rota çiz.
- [x] Haritayı mobil ekranda tam ekran düzenle.
- [x] TR/EN/DE/FR çevirilerini yeni akışa bağla.
- [x] Web/Android build ve mobil akışı doğrula.

## T3 Rota ve Mobil Uyumluluk Simülasyonu

- [x] T3 seçiminden Rent a Car Otoparkı öneri ekranına geçişi simüle et.
- [x] T3 yaya rota isteğini ve rota özetini simüle et.
- [x] T3 araç rota isteğini ve rota özetini simüle et.
- [x] Mobil ana ekran görünümünü 390x844 ölçüsünde kontrol et.
- [x] Tam ekran harita açma/kapatma ve menü kontrollerini mobilde kontrol et.
- [x] Bulguları kaydet ve gerekiyorsa düzeltme yap.

- [x] Fotoğraf beklenmeyen mevcut kapsamda shuttle hedefinin metin tabanlı yönlendirme ve marker akışını doğrula.

## Dil Kısaltması Düzeltmesi

- [x] İngilizce bayrak/dil düğmesindeki görünen kısaltmayı GB yerine EN yap.
- [x] Mobil görünüm ve production build ile düzeltmeyi doğrula.
- [x] Düzeltmeyi checkpoint olarak kaydet.

## GB Ülke Kodu Görünümü Düzeltmesi

- [x] İngilizce dil menüsü satırında ülke kodu olarak görünen GB ifadesini kaldır ve yalnızca EN göster.
- [x] İngilizce bayrak/görünen dil etiketini mobil açılır menüde doğrula.
- [x] Düzeltmeyi checkpoint olarak kaydet.

## Dil Geçişi, Shuttle İşlem Kontrolü ve Pin Kartları

- [x] Dil değişiminden sonra içerik için yumuşak fade-in geçişi ekle.
- [x] Shuttle yönlendirmesinden önce işlemlerin tamamlanıp tamamlanmadığını sor.
- [x] İşlemler tamamlanmadıysa kullanıcıyı Terminal 2’ye yönlendir.
- [x] İşlemler tamamlandıysa shuttle bekleme alanı uyarısı ve rota akışını sürdür.
- [x] Harita pinlerine dokununca fotoğraflı bilgi kartını aç ve mobil görünümde doğrula.
- [x] TypeScript, production build ve etkileşim testlerini tamamla.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Canlı Konumdan Gerçek Yaya Rota Düzeltmesi

- [x] Yol Tarifi Al eyleminde başlangıç koordinatının son gerçek GPS konumundan alınmasını sağla.
- [x] Konum alınmadan rota isteği gönderilmesini ve eski/terminal merkezli başlangıç kullanılmasını engelle.
- [x] Tüm terminal ve shuttle yönlendirmelerinde yaya profilini kullan.
- [x] Rota çizgisinin mavi canlı konum noktasıyla aynı koordinattan başlamasını doğrula.
- [x] Mobil senaryoda yaya rota, TypeScript ve production build testlerini tamamla.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Fotoğraf Büyütme ve Offline Kullanım

- [x] Fotoğraf kartına dokununca tam ekran büyütme modalı aç.
- [x] Modalı mobilde kapatma, geri dönüş ve erişilebilir etiketlerle doğrula.
- [x] Logo ve mevcut terminal/otopark fotoğraflarını APK içindeki offline asset yollarına bağla.
- [x] Offline asset fallback davranışını web ve Android için doğrula.
- [x] TypeScript, production build ve mobil/offline kontrollerini tamamla.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Yol Tarifi Sonrası Haritaya Otomatik Kaydırma

- [x] Harita bölümü için referans oluştur ve Yol Tarifi Al başlatılınca haritaya smooth scroll yap.
- [x] Mobilde rota yüklenirken harita ve rota özetinin görünür kaldığını doğrula.
- [x] TypeScript ve production build testlerini tamamla.
- [x] Güncel sürümü checkpoint olarak kaydet.

## Yeni Sol Üst Logo

- [x] Kullanıcının sağladığı yeşil zeminli beyaz E logosunu kalıcı offline asset olarak ekle.
- [x] Home sol üst marka alanındaki mevcut logoyu yeni E logosuyla değiştir.
- [x] Web, mobil görünüm ve Android offline paketinde yeni logoyu doğrula.
- [x] Güncel sürümü checkpoint olarak kaydet.
