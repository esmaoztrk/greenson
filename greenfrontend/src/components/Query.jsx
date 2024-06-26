import React from 'react';
import { Link } from 'react-router-dom';

const Query = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="py-10">
        <h3 className="text-3xl font-light text-center mb-5">Sipariş Sorgulama</h3>
        <p className="text-md text-center mb-5">Siparişlerinizle ilgili tüm sorularınız ve ürünlerle ilgili bilgi almak için Türkiye'nin her yerinden 0850 259 9909 numaralı telefonumuzdan bize ulaşabilir veya iletişim formumuzu doldurarak destek talebinde bulunabilirsiniz.</p>
        <div className="flex ">
          <div className="w-1/2">
            <div className="mb-4">
              <div className="text-gray-500 text-sm font-medium mb-1"><span className="text-red-600">*</span> Email</div>
              <input className="border" />
            </div>
          </div>
          <div className="w-1/2">
            <div className="mb-4">
              <div className="text-gray-500 text-sm font-medium mb-1"><span className="text-red-600">*</span> Sipariş Numarası</div>
              <input className="border" />
            </div>
          </div>
        </div>
        <div className="btn-container">
            <Link to="/product/123" className="btn" style={{ fontWeight:'1000' }}>
                <span>Sorgula</span>
            </Link>
        </div>
        <div className="mt-12 text-sm">
          <h3><strong>Ürününüzü Teslim Alırken</strong></h3>
          <p>Kargo tutanağını imzalamadan önce ürününüzün kutusunda herhangi bir hasar yada sorun olup olmadığını kontrol ediniz. Herhangi bir nedenle hasar veya eksiklik, kolinin bandında açılma var ise teslimatla ilgili hiç bir belgeyi imzalamadan kargo görevlisine tutanak tutulması talebiyle birlikte kutunuzu iade ediniz. Bu yükümlülüğünüzü yerine getirdiğiniz takdirde, yeni ürünleriniz derhal tarafınıza gönderilecektir. Kutusu hasarlı olan, içeriği eksik olduğu iddia edilen ürünlerin teslim alınması durumunda içindeki ürünlerin hasarından veya eksikliğinden sorumluluğumuz bulunmamaktadır. Bu durumu en kısa zamanda Fabrikalar Bölgesi Fatih Mah. No: 2 Kadirzade Beymir İlknur Gıda Ltd. Şti. Merkez, Sav, Isparta adresimize yazılı olarak ya da&nbsp;
          <a href="tel:08502599909" className="text-blue-600">0850 259 9909</a>
          &nbsp;numaralı telefonumuzdan bize ulaşabilir veya iletişim formumuzu doldurarak destek talebinde bulunabilirsiniz.</p>
        </div>
      </div>
    </div>
  );
}

export default Query;
