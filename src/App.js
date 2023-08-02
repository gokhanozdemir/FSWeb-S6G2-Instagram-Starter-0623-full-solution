/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, { useState } from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";

// sahteVeri'yi import edin
import sahteVeri from "./sahte-veri";
import "./App.css";

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "data" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  const [data, setData] = useState(sahteVeri);

  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [aramaKriteri, setAramaKriteri] = useState();

  const gonderiyiBegen = (gonderiID) => {
    console.log("gonderiyiBegen tetiklendi", gonderiID);

    /*  const filteredGonderiler = data.filter((gonderi) => {
        return gonderi.username.includes(gonderiID);
      }); */

    const newData = [...data];

    newData.map((data) => {
      //return gonderi.username.includes(gonderiID);
      if (data.id === gonderiID) {
        data.likes += 1;
      }

      return data;
    });

    setData(newData);

    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

    "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */
  };

  const handleSearch = (term) => {
    // aşağıdaki satır statei güncelliyor
    setAramaKriteri(term);
    console.log("handleSearch event", term);

    // data stateini filtrelemek için
    if (!term) {
      console.log("term yoksa");
      setData(sahteVeri);
    } else {
      const filteredGonderiler = data.filter((gonderi) => {
        return gonderi.username.includes(term);
      });

      setData(filteredGonderiler);
    }
  };

  return (
    <div className="App">
      <AramaCubugu aramaKriteri={aramaKriteri} aramaFonksiyonu={handleSearch} />

      <Gonderiler gonderilerProp={data} gonderiyiBegen={gonderiyiBegen} />

      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
    </div>
  );
};

export default App;
