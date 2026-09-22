# Antalya Europcar Guide — Google Play Release

## Hazır paket

Google Play Console’da **Internal testing**, **Closed testing** veya **Production** kanalına yüklenmek üzere imzalı Android App Bundle oluşturuldu.

| Alan | Değer |
|---|---|
| Uygulama adı | Antalya Europcar Guide |
| Paket kimliği | `com.europcar.antalya.guide` |
| Sürüm adı | `1.0.1` |
| Version code | `2` |
| Minimum Android | API 24 |
| Target SDK | API 36 |
| Paket türü | Signed Android App Bundle (`.aab`) |
| Dosya | `Antalya-Europcar-Guide-release-v1.0.1.aab` |
| SHA-256 | `05b19b4db17e8b7954ae3ef0b215d0b0aa54f2d51084abd0f93f56b6d24c8e18` |

> Google Play Console’a yükleme için AAB dosyasını kullanın; debug APK yalnızca cihaz içi test içindir.

## Play Console yükleme adımları

Önce [Google Play Console](https://play.google.com/console/) hesabınızda uygulama oluşturun ve uygulama türünü **App** olarak seçin. Uygulama adı, varsayılan dil, ücretsiz/ücretli durumu ve geliştirici iletişim bilgilerini tamamlayın.

Ardından **Test and release → Internal testing → Create new release** yolunu açın. `Antalya-Europcar-Guide-release-v1.0.1.aab` dosyasını yükleyin. İlk yüklemede Google Play App Signing ekranı açılırsa **Use Google-generated key** seçeneği önerilir. Bu seçenekle Google dağıtım imzalama anahtarını korur; projede oluşturulan anahtar ise yükleme anahtarı olarak kullanılabilir.

Release notu için aşağıdaki metin kullanılabilir:

> Antalya Airport Europcar customers can now find Terminal 1 and Terminal 2 offices, view real office photos, use live location guidance, see walking routes, reach the shuttle point, switch between Turkish, English, German and French, and contact support by phone or WhatsApp.

## Mağaza açıklaması taslağı

### Kısa açıklama

Antalya Havalimanı Europcar ofislerini ve shuttle noktasını kolayca bulun.

### Uzun açıklama

Antalya Europcar Guide, Antalya Havalimanı’na gelen müşterilerin doğru Europcar noktasını daha kolay bulmasına yardımcı olur. Terminal 1, Terminal 2, rent a car otoparkı ve Terminal 2 shuttle bekleme noktası harita üzerinde özel işaretçilerle gösterilir.

Uygulama, izin verilmesi hâlinde canlı konumu kullanarak en yakın noktaya olan mesafeyi ve tahmini yürüme süresini gösterir. Terminal 1 ve Terminal 2 için gerçek ofis fotoğrafları, harita marker’ı seçildiğinde açılan bilgi kartlarında görüntülenebilir. Fotoğraflar dokunularak tam ekran büyütülebilir.

Uygulama Türkçe, İngilizce, Almanca ve Fransızca dillerini destekler. Kullanıcılar iletişim kartlarından normal telefon araması veya WhatsApp seçebilir. Konum izni verilmediğinde terminal seçimiyle uygulama kullanılmaya devam edilebilir.

### Önerilen mağaza kategorisi

**Travel & Local** veya Google Play Console’un uygulama içeriği akışında en yakın karşılık gelen seyahat/yerel rehber kategorisi seçilebilir.

## Play Console formları için notlar

Uygulama konum izni istediği için **Data safety** formunda konum verisinin kullanım amacı doğru ve gerçeğe uygun şekilde beyan edilmelidir. Uygulama, kullanıcının konumunu yürüme mesafesi ve rota gösterimi için kullanır. Play Console’daki veri güvenliği yanıtları, gerçek dağıtım mimarisi ve kullanılan servislerle eşleştirilerek doldurulmalıdır.

Uygulama telefon ve WhatsApp bağlantıları içerdiği için mağaza açıklamasında bu iletişim işlevleri açıkça belirtilebilir. Uygulama içinde ödeme, hesap oluşturma veya kullanıcıdan kişisel belge yükleme akışı bulunmadığı sürece ilgili Play Console seçenekleri buna göre yanıtlanmalıdır.

## İmzalama anahtarı güvenliği

Yerel upload keystore ve `keystore.properties` dosyaları kaynak kontrolüne alınmayacak şekilde Android `.gitignore` dosyasına eklendi. `play-upload-key-credentials.txt` dosyası ve `Antalya-Europcar-Guide-play-upload-key.jks` dosyası güvenli bir yerde saklanmalıdır. Bu bilgiler kaybedilirse ileride aynı uygulama kimliğiyle güncelleme yüklemek sorunlu hâle gelebilir.

Google Play App Signing etkinleştirildiğinde Google dağıtım anahtarını yönetir; yerel keystore ise Play Console’a yükleme yapan anahtar olarak korunmalıdır. Keystore dosyasını e-posta, herkese açık depolar veya sohbet dışındaki güvensiz kanallarda paylaşmayın.

## Yayın öncesi kontrol

Play Console’daki internal testing kanalında en az bir fiziksel Android cihazla şu akışlar test edilmelidir: konum izni verme ve reddetme, Terminal 1 ve Terminal 2 marker seçimi, gerçek fotoğrafı tam ekran açma, uzun basma ile ofis kartını açma, dil değişimi, normal arama ve WhatsApp seçimi, harita üzerinde kaydırma/yakınlaştırma ve shuttle yönlendirmesi.

### Referanslar

[1]: https://support.google.com/googleplay/android-developer/answer/9859152 "Google Play Console — Create and set up your app"

[2]: https://support.google.com/googleplay/android-developer/answer/9842756 "Google Play Console — Prepare and roll out a release"

[3]: https://developer.android.com/build/building-cmdline "Android Developers — Build your app from the command line"
