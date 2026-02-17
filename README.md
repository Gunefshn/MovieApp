🎬 Movie App (React Native + Firebase)

Bu proje, React Native (Expo) kullanılarak geliştirilmiş, Firebase tabanlı bir film yönetim uygulamasıdır.
Kullanıcılar film ekleyebilir, listeleyebilir, detaylarını görüntüleyebilir, düzenleyebilir ve silebilir.

Uygulama, modern mobil mimari prensipleri dikkate alınarak modüler yapı, custom hooks, React Query server state yönetimi ve Firebase servis entegrasyonu ile geliştirilmiştir.

🚀 Özellikler

✅ Film listeleme
✅ Film detay görüntüleme
✅ Yeni film ekleme
✅ Film düzenleme
✅ Film silme
✅ Firebase Firestore veri yönetimi
✅ Firebase Storage görsel yükleme altyapısı
✅ React Query ile server state yönetimi
✅ Expo Router ile navigation yapısı
✅ Dark Mode with Purple Accent (Midnight Purple) UI teması
✅ iOS tarzı modern kart tasarımı

📱 Uygulama Ekranları
1️⃣ Movie List
    -Tüm filmleri listeler
    -Detay ekranına yönlendirme içerir
2️⃣ Movie Detail
    -Seçilen film bilgilerini gösterir
    -Silme ve düzenleme işlemleri yapılabilir
3️⃣ Add / Edit Movie
    -Yeni film ekleme formu
    -Mevcut filmi güncelleme desteği

🧠 Kullanılan Teknolojiler
  -React Native (Expo)
  -Expo Router
  -TypeScript
  -Firebase Firestore
  -Firebase Storage
  -React Query (TanStack Query)
  -Custom Hooks Architecture
  -Modular Component Structure

🎨 Tema
Uygulamada Dark Mode with Purple Accent (Midnight Purple) teması kullanılmıştır.
Renk Paleti:
-Background	#1a1a2e
-Card Background	#2c2c3e
-Accent	#6644cc

📂 Proje Yapısı
app/
  movies/
    [id]/
      delete.tsx
      edit.tsx
      index.tsx
    add/
      index.tsx
  _layout.tsx
  index.tsx

components/
  MovieCard.tsx
  MovieForm.tsx
  Container.tsx
  Button.tsx

hooks/
  useMovies.ts
  useAddMovie.ts
  useUpdateMovie.ts
  useDeleteMovie.ts

services/
  firebaseConfig.ts

types/
  movie.ts

⚙️ Kurulum
Projeyi çalıştırmak için:

  -git clone <repo-url>
  -cd movie-app
  -npm install
  -npx expo start

👨‍💻 Geliştirici

📝 Lisans
Bu proje eğitim amaçlı geliştirilmiştir.
