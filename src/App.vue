<script setup></script>

<template>

  <!-- ШАПКА -->
  <div class="top-bar">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start">
          <i class="bi bi-telephone-fill me-1"></i> +7 (495) 123-45-67 &nbsp;&nbsp;
          <i class="bi bi-envelope-fill me-1"></i> hello@applefresh.ru
        </div>
        <div class="col-md-6 text-center text-md-end">
          <a href="#" class="me-3"><i class="bi bi-facebook"></i></a>
          <a href="#" class="me-3"><i class="bi bi-instagram"></i></a>
          <a href="#" class="me-3"><i class="bi bi-telegram"></i></a>
          <a href="#"><i class="bi bi-whatsapp"></i></a>
        </div>
      </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom">
    <div class="container">
      <a class="navbar-brand" href="#">
        <i class="bi bi-apple"></i> AppleFresh
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain"
        aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMain">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
          <li class="nav-item"><a class="nav-link" href="#advantages">Преимущества</a></li>
          <li class="nav-item"><a class="nav-link" href="#products">Товары</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">О нас</a></li>
          <li class="nav-item"><a class="nav-link" href="#blog">Блог</a></li>
          <li class="nav-item"><a class="nav-link" href="#reviews">Отзывы</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Контакты</a></li>
        </ul>
        <a href="#" class="btn btn-apple ms-lg-3">Корзина <i class="bi bi-bag-check"></i></a>
      </div>
    </div>
  </nav>

  <!-- СЛАЙДЕР (карусель с промо текстом и картинкой) -->
  <div class="container my-5">
    <div id="promoCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner rounded-4 shadow">
        <div class="carousel-item active">
          <img src="https://dummyimage.com/1280x720/fff/aaa" class="d-block w-100" alt="яблоки урожай"
            style="height: 400px; object-fit: cover;">
          <div class="carousel-caption d-none d-md-block">
            <h3>Свежайшие яблоки с фермы</h3>
            <p>Прямая доставка из экологически чистых садов. Вкус детства!</p>
            <a href="#products" class="btn btn-apple mt-2">Выбрать сорт</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://dummyimage.com/1280x720/fff/aaa" class="d-block w-100" alt="натуральные яблоки"
            style="height: 400px; object-fit: cover;">
          <div class="carousel-caption d-none d-md-block">
            <h3>Скидка 15% на первый заказ</h3>
            <p>Подпишись на рассылку и получи промокод на корзину.</p>
            <a href="#contact" class="btn btn-apple mt-2">Узнать больше</a>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#promoCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Предыдущий</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#promoCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Следующий</span>
      </button>
    </div>
  </div>

  <!-- БЛОК С ПРЕИМУЩЕСТВАМИ (эмодзи + текст) -->
  <section id="advantages" class="container my-5 pt-4">
    <h2 class="section-title text-center w-100">Почему выбирают нас</h2>
    <div class="row gy-4 mt-2 justify-content-center text-center">
      <div class="col-6 col-md-4 col-lg-2">
        <div class="advantage-card">
          <div class="advantage-emoji">🍎</div>
          <h5 class="mt-2">Свежий урожай</h5>
          <p class="text-muted">Срываем утром, доставляем в день заказа</p>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-2">
        <div class="advantage-card">
          <div class="advantage-emoji">🌿</div>
          <h5 class="mt-2">Эко-продукция</h5>
          <p class="text-muted">Без пестицидов, ГМО и воска</p>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-2">
        <div class="advantage-card">
          <div class="advantage-emoji">🚚</div>
          <h5 class="mt-2">Бесплатная доставка</h5>
          <p class="text-muted">От 1500₽ по Москве и области</p>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-2">
        <div class="advantage-card">
          <div class="advantage-emoji">👍</div>
          <h5 class="mt-2">100% гарантия</h5>
          <p class="text-muted">Вернём деньги, если не понравится</p>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-2">
        <div class="advantage-card">
          <div class="advantage-emoji">💰</div>
          <h5 class="mt-2">Цены от фермы</h5>
          <p class="text-muted">Никаких наценок посредников</p>
        </div>
      </div>
    </div>
  </section>

  <!-- СЛАЙДЕР С КАРТОЧКАМИ ТОВАРА -->
  <section id="products" class="bg-apple-light py-5 my-5">
    <div class="container">
      <h2 class="section-title text-center w-100">🍏 Хиты продаж</h2>
      <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner pb-4">
          <!-- карточка 1 -->
          <div class="carousel-item active">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-5">
                <div class="card product-card">
                  <img src="https://dummyimage.com/1280x720/fff/aaa" class="card-img-top" alt="Гренни Смит">
                  <div class="card-body text-center">
                    <h5 class="card-title fw-bold">Гренни Смит</h5>
                    <p class="card-text text-muted">Хрустящие, кисло-сладкие яблоки. Идеальны для пирогов.</p>
                    <div class="price-tag">199 ₽/кг</div>
                    <a href="#" class="btn btn-outline-apple mt-3">В корзину <i class="bi bi-cart-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- карточка 2 -->
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-5">
                <div class="card product-card">
                  <img src="https://dummyimage.com/1280x720/fff/aaa" class="card-img-top" alt="Фуджи">
                  <div class="card-body text-center">
                    <h5 class="card-title fw-bold">Фуджи</h5>
                    <p class="card-text text-muted">Невероятно сладкие, сочные, с медовым ароматом.</p>
                    <div class="price-tag">249 ₽/кг</div>
                    <a href="#" class="btn btn-outline-apple mt-3">В корзину <i class="bi bi-cart-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- карточка 3 -->
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-5">
                <div class="card product-card">
                  <img src="https://dummyimage.com/1280x720/fff/aaa" class="card-img-top" alt="Голден">
                  <div class="card-body text-center">
                    <h5 class="card-title fw-bold">Голден</h5>
                    <p class="card-text text-muted">Нежные, маслянистые, с лёгкой кислинкой.</p>
                    <div class="price-tag">219 ₽/кг</div>
                    <a href="#" class="btn btn-outline-apple mt-3">В корзину <i class="bi bi-cart-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- карточка 4 -->
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-5">
                <div class="card product-card">
                  <img src="https://dummyimage.com/1280x720/fff/aaa" class="card-img-top" alt="Семеренко">
                  <div class="card-body text-center">
                    <h5 class="card-title fw-bold">Семеренко</h5>
                    <p class="card-text text-muted">Знаменитый советский сорт, ароматный и хрустящий.</p>
                    <div class="price-tag">179 ₽/кг</div>
                    <a href="#" class="btn btn-outline-apple mt-3">В корзину <i class="bi bi-cart-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Управление каруселью -->
        <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev"
          style="width: 5%;">
          <span class="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
          <span class="visually-hidden">Пред.</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next"
          style="width: 5%;">
          <span class="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
          <span class="visually-hidden">След.</span>
        </button>
        <div class="carousel-indicators position-relative mt-4">
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="0" class="active bg-danger"
            style="width: 12px; height: 12px; border-radius: 50%; margin: 0 6px;"></button>
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="1" class="bg-secondary"
            style="width: 12px; height: 12px; border-radius: 50%; margin: 0 6px;"></button>
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="2" class="bg-secondary"
            style="width: 12px; height: 12px; border-radius: 50%; margin: 0 6px;"></button>
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="3" class="bg-secondary"
            style="width: 12px; height: 12px; border-radius: 50%; margin: 0 6px;"></button>
        </div>
      </div>
    </div>
  </section>

  <!-- ОПИСАНИЕ МАГАЗИНА (h1 + текст + изображение) -->
  <section id="about" class="container my-5">
    <div class="row align-items-center gy-5">
      <div class="col-lg-6 order-lg-2">
        <img src="https://dummyimage.com/1280x720/fff/aaa" alt="Наш сад" class="img-fluid rounded-4 shadow">
      </div>
      <div class="col-lg-6 order-lg-1">
        <h1 class="display-5 fw-bold text-success">AppleFresh — яблоки, влюбляющие с первого укуса</h1>
        <p class="lead mt-3">Мы семейная ферма, которая более 15 лет выращивает яблоки в экологически чистом районе.
          Собираем урожай вручную, сортируем и упаковываем с любовью. Наша миссия — подарить каждому столу настоящий,
          сочный вкус детства без химии и лишних добавок.</p>
        <p>В наших яблоках сохраняются все витамины и минералы. Мы доставляем заказы в день сбора, чтобы вы наслаждались
          свежестью. Попробуйте разные сорта — от классических сладких до пикантных с кислинкой. Присоединяйтесь к
          сообществу здорового питания!</p>
        <a href="#products" class="btn btn-apple mt-2">Каталог сортов</a>
      </div>
    </div>
  </section>

  <!-- ИЗБРАННЫЕ ЗАПИСИ БЛОГА -->
  <section id="blog" class="bg-white py-5">
    <div class="container">
      <h2 class="section-title text-center w-100">Блог</h2>
      <div class="row g-4 mt-2">
        <div class="col-md-6 col-lg-4">
          <div class="card blog-card h-100 border-0 shadow-sm">
            <img src="https://dummyimage.com/1280x720/fff/aaa" class="card-img-top" alt="яблочный пирог">
            <div class="card-body">
              <span class="badge bg-success mb-2">Рецепты</span>
              <h5 class="card-title">Шарлотка за 30 минут: секреты пышности</h5>
              <p class="card-text">Идеальный рецепт с кисло-сладкими яблоками. Корж получается воздушным и влажным.</p>
              <a href="#" class="stretched-link text-danger">Читать →</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card blog-card h-100 border-0 shadow-sm">
            <img src="https://dummyimage.com/1280x720/fff/aaa" class="card-img-top" alt="польза яблок">
            <div class="card-body">
              <span class="badge bg-success mb-2">Полезное</span>
              <h5 class="card-title">5 причин есть яблоки каждый день</h5>
              <p class="card-text">Иммунитет, клетчатка, молодость кожи — рассказываем о реальной пользе.</p>
              <a href="#" class="stretched-link text-danger">Читать →</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card blog-card h-100 border-0 shadow-sm">
            <img src="https://dummyimage.com/1280x720/fff/aaa" class="card-img-top" alt="выбор яблок">
            <div class="card-body">
              <span class="badge bg-success mb-2">Советы</span>
              <h5 class="card-title">Как выбрать самые сладкие яблоки?</h5>
              <p class="card-text">Отличаем сорта, определяем зрелость и сохраняем свежесть на недели.</p>
              <a href="#" class="stretched-link text-danger">Читать →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ПОСЛЕДНИЕ ОТЗЫВЫ -->
  <section id="reviews" class="bg-apple-light py-5 my-4">
    <div class="container">
      <h2 class="section-title text-center w-100">Отзывы</h2>
      <div class="row g-4 mt-3">
        <div class="col-md-4">
          <div class="testimonial-card">
            <i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i
              class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i
              class="bi bi-star-fill text-warning"></i>
            <p class="mt-3 fst-italic">“Самые сочные яблоки, которые я пробовал! Заказываю Гренни Смит для выпечки —
              всегда идеальная кислинка. Доставка быстрая, курьер вежливый.”</p>
            <div class="d-flex align-items-center mt-3">
              <img src="https://dummyimage.com/60x60/fff/aaa" class="rounded-circle me-3" width="48" height="48"
                alt="avatar">
              <div><strong>Алексей К.</strong><br><small class="text-muted">постоянный клиент</small></div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial-card">
            <i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i
              class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i
              class="bi bi-star-half text-warning"></i>
            <p class="mt-3 fst-italic">“Ребёнок обожает Фуджи — очень сладкие, без единой кислинки. Упаковано аккуратно,
              ни одно яблоко не помялось. Обязательно закажу ещё!”</p>
            <div class="d-flex align-items-center mt-3">
              <img src="https://dummyimage.com/60x60/fff/aaa" class="rounded-circle me-3" width="48" height="48"
                alt="avatar">
              <div><strong>Елена М.</strong><br><small class="text-muted">мама двоих детей</small></div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial-card">
            <i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i
              class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i
              class="bi bi-star-fill text-warning"></i>
            <p class="mt-3 fst-italic">“Удивительный вкус и аромат — как из детства, когда бабушка привозила яблоки из
              деревни. Всем рекомендую, качество на высоте!”</p>
            <div class="d-flex align-items-center mt-3">
              <img src="https://dummyimage.com/60x60/fff/aaa" class="rounded-circle me-3" width="48" height="48"
                alt="avatar">
              <div><strong>Дмитрий В.</strong><br><small class="text-muted">шеф-повар</small></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ФОРМА ОБРАТНОЙ СВЯЗИ -->
  <section id="contact" class="container my-5 py-4">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="card-body p-4 p-md-5">
            <h2 class="text-center mb-4 fw-bold text-success">Свяжитесь с нами</h2>
            <p class="text-center text-muted mb-4">Остались вопросы? Напишите, и мы ответим в течение часа!</p>
            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Ваше имя *</label>
                  <input type="text" class="form-control" placeholder="Иван Петров" required>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Email *</label>
                  <input type="email" class="form-control" placeholder="ivan@example.com" required>
                </div>
                <div class="col-12">
                  <label class="form-label">Телефон (необязательно)</label>
                  <input type="tel" class="form-control" placeholder="+7 999 123 45 67">
                </div>
                <div class="col-12">
                  <label class="form-label">Сообщение *</label>
                  <textarea class="form-control" rows="4"
                    placeholder="Напишите, какой сорт вас интересует или задайте вопрос..."></textarea>
                </div>
                <div class="col-12 text-center mt-4">
                  <button type="submit" class="btn btn-apple px-5 py-2">Отправить <i class="bi bi-send"></i></button>
                  <p class="small text-muted mt-3">Нажимая на кнопку, вы соглашаетесь с политикой обработки данных.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ФУТЕР С ССЫЛКАМИ -->
  <footer class="bg-dark text-white pt-5 pb-4 mt-5">
    <div class="container">
      <div class="row gy-4">
        <div class="col-md-4">
          <div class="d-flex align-items-center">
            <i class="bi bi-apple fs-1 text-success me-2"></i>
            <h4 class="fw-bold mb-0">AppleFresh</h4>
          </div>
          <p class="mt-3 text-light-50">Свежие яблоки высшего качества с доставкой по всей России. Натуральные
            фермерские продукты для вашей семьи.</p>
          <div class="mt-3">
            <a href="#" class="text-white me-3"><i class="bi bi-instagram fs-5"></i></a>
            <a href="#" class="text-white me-3"><i class="bi bi-facebook fs-5"></i></a>
            <a href="#" class="text-white me-3"><i class="bi bi-youtube fs-5"></i></a>
            <a href="#" class="text-white"><i class="bi bi-tiktok fs-5"></i></a>
          </div>
        </div>
        <div class="col-md-2 footer-links">
          <h5 class="fw-bold">Магазин</h5>
          <ul class="list-unstyled">
            <li><a href="#products" class="text-white-50">Каталог</a></li>
            <li><a href="#" class="text-white-50">Акции</a></li>
            <li><a href="#" class="text-white-50">Оплата</a></li>
            <li><a href="#" class="text-white-50">Доставка</a></li>
          </ul>
        </div>
        <div class="col-md-3 footer-links">
          <h5 class="fw-bold">Информация</h5>
          <ul class="list-unstyled">
            <li><a href="#about" class="text-white-50">О компании</a></li>
            <li><a href="#blog" class="text-white-50">Блог</a></li>
            <li><a href="#reviews" class="text-white-50">Отзывы</a></li>
            <li><a href="#" class="text-white-50">Контакты</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="fw-bold">Контакты</h5>
          <ul class="list-unstyled">
            <li><i class="bi bi-geo-alt-fill me-2"></i> г. Москва, ул. Яблоневая, 12</li>
            <li><i class="bi bi-telephone-fill me-2"></i> +7 (495) 123-45-67</li>
            <li><i class="bi bi-envelope-fill me-2"></i> hello@applefresh.ru</li>
            <li><i class="bi bi-clock-fill me-2"></i> Ежедневно: 9:00 - 21:00</li>
          </ul>
        </div>
      </div>
      <hr class="mt-4 opacity-25">
      <div class="text-center pt-2">
        <small>© {{ new Date().getFullYear() }} AppleFresh — Магазин фермерских яблок. Все права защищены.</small>
      </div>
    </div>
  </footer>

</template>

<style scoped>
body {
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  scroll-behavior: smooth;
}

/* двухуровневая шапка */
.top-bar {
  background: #2c5e2e;
  color: #f9f3e2;
  font-size: 0.9rem;
  padding: 8px 0;
}

.top-bar a {
  color: #f9f3e2;
  text-decoration: none;
  transition: opacity 0.2s;
}

.top-bar a:hover {
  opacity: 0.8;
  color: #ffdd99;
}

.navbar-brand {
  font-weight: 700;
  font-size: 1.7rem;
  color: #2c5e2e;
}

.navbar-brand i {
  color: #e03a3a;
}

.nav-link {
  font-weight: 500;
  color: #2c5e2e !important;
}

.nav-link:hover {
  color: #e03a3a !important;
}

.btn-apple {
  background-color: #e03a3a;
  color: white;
  border-radius: 50px;
  padding: 8px 24px;
  font-weight: 600;
  transition: 0.2s;
}

.btn-apple:hover {
  background-color: #b52e2e;
  color: white;
}

.btn-outline-apple {
  border: 2px solid #e03a3a;
  color: #e03a3a;
  border-radius: 50px;
  padding: 6px 20px;
  font-weight: 600;
}

.btn-outline-apple:hover {
  background-color: #e03a3a;
  color: white;
}

.carousel-item {
  background: #fef5e7;
  border-radius: 24px;
  overflow: hidden;
}

.carousel-caption {
  background: rgba(44, 94, 46, 0.75);
  border-radius: 24px;
  bottom: 20px;
  left: 10%;
  right: 10%;
  padding: 1rem;
}

.advantage-card {
  background: #ffffff;
  border-radius: 32px;
  padding: 20px 12px;
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
  height: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.03);
}

.advantage-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.advantage-emoji {
  font-size: 3.2rem;
}

.product-card {
  border: none;
  border-radius: 28px;
  transition: 0.2s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  margin: 0 auto;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
}

.product-card img {
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  height: 220px;
  object-fit: cover;
}

.price-tag {
  font-size: 1.6rem;
  font-weight: 700;
  color: #e03a3a;
}

.testimonial-card {
  background: #fff9ef;
  border-radius: 24px;
  padding: 20px;
  height: 100%;
  border: 1px solid #ffe1b3;
}

.blog-card {
  border-radius: 24px;
  overflow: hidden;
  transition: 0.2s;
  height: 100%;
}

.blog-card img {
  height: 180px;
  object-fit: cover;
}

.footer-links a {
  text-decoration: none;
  color: #cfdfc9;
  transition: 0.2s;
}

.footer-links a:hover {
  color: #ffd966;
  text-decoration: underline;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #2c5e2e;
  border-radius: 50%;
  padding: 20px;
}

.bg-apple-light {
  background-color: #fef6e6;
}

.section-title {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
  font-weight: 700;
  color: #2c5e2e;
}

.section-title:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 60px;
  height: 3px;
  background: #e03a3a;
  border-radius: 3px;
}

hr {
  opacity: 0.3;
}
</style>
