window.onload = function () {
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  ymaps.ready(function () {
    if (isMobile.any()) {
      var map = new ymaps.Map("map", {
        center: [55.74458077318986, 52.4163845930937],
        zoom: 14
      });
    } else {
      var map = new ymaps.Map("map", {
        center: [55.74352580045816, 52.41261986439507],
        zoom: 15
      });
    }

    var place = new ymaps.Placemark(
      [55.73987448450304, 52.40488745696638], {
        hintContent: 'Адрес №1',
        balloonContent: '<h4><span style="color:red;">"Phone template"</span></h4><strong>Адрес:</strong> РТ, г. Набережные Челны,<br><strong>Время работы:</strong> Пн-Вс: 10:00-21:00 (Без обеда и выходных)<br><strong>Телефон:</strong> 8 (917) 111-11-11<br><strong>Е-mail:</strong> mail@phone.ru'
      }, {
        iconImageHref: 'http://design-aura.ru/templates/phone/assets/img/location-pointer-lighter.png',
        iconImageSize: [32, 32],
        iconLayout: 'default#image',
        balloonShadow: true
      }
    );

    var place2 = new ymaps.Placemark(
      [55.74654015928334, 52.416308249839496], {
        hintContent: 'Адрес №2',
        balloonContent: '<h4><span style="color:red;">"Phone template"</span></h4><strong>Адрес:</strong> РТ, г. Набережные Челны,<br><strong>Время работы:</strong> Пн-Пт: 9:00-19.00 | Сб-Вс: 10:00-18.00 (Без обеда и выходных)<br><strong>Телефон:</strong> 8 (917) 222-22-22<br><strong>Е-mail:</strong> mail@phone.ru'
      }, {
        iconImageHref: 'http://design-aura.ru/templates/phone/assets/img/location-pointer-lighter.png',
        iconImageSize: [32, 32],
        iconLayout: 'default#image',
        balloonShadow: true
      }
    );

    var place3 = new ymaps.Placemark(
      [55.74500820914843, 52.42602637943774], {
        hintContent: 'Адрес №3',
        balloonContent: '<h4><span style="color:red;">"Phone template"</span></h4><strong>Адрес:</strong> РТ, г. Набережные Челны,<br><strong>Время работы:</strong> Пн-Вс: 10:00-19.30 (Без обеда и выходных)<br><strong>Телефон:</strong> 8 (917) 333-33-33<br><strong>Е-mail:</strong> mail@phone.ru'
      }, {
        iconImageHref: 'http://design-aura.ru/templates/phone/assets/img/location-pointer-lighter.png',
        iconImageSize: [32, 32],
        iconLayout: 'default#image',
        balloonShadow: true
      }
    );

    map.geoObjects.add(place);
    map.geoObjects.add(place2);
    map.geoObjects.add(place3);
    map.behaviors.disable('scrollZoom');
    if (isMobile.any()) {
      map.behaviors.disable('drag');
    }

    place.events.add('click', function (e) {
      e.get('target').options.set({
        iconImageHref: 'http://design-aura.ru/templates/phone/assets/img/location-pointer-lighter.png'
      });

    });
  });
}