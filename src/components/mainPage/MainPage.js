import style from "./style.module.scss";
import { MainPageConfig } from "./MainPageConfig";
const MainPage = () => {
  return (
    <div>
      <main>
        <div className={style.pageMain}>
          <div className={style.scaleCardMainPage}>
            <div className={style.cardMainPage}>
              <div>
                <div className={style.order}>Мой заказ</div>
                <div className={style.orderText}>3 х 9 000р</div>
              </div>
              <div className={style.basket}>
                <img src={MainPageConfig.bucketImg} alt="basketMainPage" />
              </div>
            </div>
          </div>
          <h1>
            Дизайн-проект для вашей квартиры
            <br /> за 2 недели и 30000 ₽
          </h1>
          <div className={style.scaleButton}>
            <button className={style.buttonMainPage}>Консультация</button>
          </div>
          <div className={style.pointMainPage}>
            <div className={style.ellipse}></div>
            <div className={style.rectangle}></div>
            <div className={style.ellipse}></div>
          </div>
          <div className={style.scaleInfoBlock}>
            <div className={style.infoBlockMainPage}>
              <div className={style.cartMainPage}>
                <div>
                  <img
                    src={MainPageConfig.timeIconMainPage}
                    alt="time"
                    className={style.iconCartMainPage}
                  />
                </div>
                <div>
                  <div className={style.mainTextCard}>2 недели</div>
                  <div className={style.subTextCard}>
                    срок выполнения заказа
                  </div>
                </div>
              </div>
              <div className={style.cartMainPage}>
                <div>
                  <img
                    src={MainPageConfig.checkBoxItem}
                    alt="checkbox"
                    className={style.iconCartMainPage}
                  />
                </div>
                <div>
                  <div className={style.mainTextCard}>Не важно</div>
                  <div className={style.subTextCard}>
                    Сколько квадратов, цена - одна!
                  </div>
                </div>
              </div>
              <div className={style.cartMainPage}>
                <div>
                  <img
                    src={MainPageConfig.purseItemMainPage}
                    alt="purse"
                    className={style.iconCartMainPage}
                  />
                </div>
                <div>
                  <div className={style.mainTextCard}>Рассрочка</div>
                  <div className={style.subTextCard}>до 24 месяцев</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={style.secondPage}>
        <div className={style.block1SecondPage}>
          <div className={style.mainTextSecondPage}>Как это работает?</div>
          <div className={style.block1Item}>
            <div className={style.numberTextSecondPage}>01</div>
            <div>
              <div className={style.titleSecondPage}>Выбор состава проекта</div>
              <div className={style.paragraphTextSecondPage}>
                Выберите состав вашего
                <br /> проекта: только планировка или
                <br /> дизайн-проект
              </div>
            </div>
          </div>
          <div className={style.block1Item}>
            <div className={style.number0203TextSecondPage}>02</div>
            <div>
              <div className={style.title0203SecondPage}>Настройка проекта</div>
              <div className={style.paragraph0203TextSecondPage}>
                Отметьте в корзине нужен ли
                <br /> вам профессиональный замер,
                <br /> подбор строительной бригады
                <br /> или точный просчет сметы
              </div>
            </div>
          </div>
          <div className={style.block1Item}>
            <div className={style.number0203TextSecondPage}>03</div>
            <div>
              <div className={style.title0203SecondPage}>Создание чертежей</div>
              <div className={style.paragraph0203TextSecondPage}>
                Наши дизайнеры спроектируют
                <br /> интерьер, подготовят чертежи.
              </div>
            </div>
          </div>
        </div>
        <div className={style.block2SecondPage}>
          <div>
            <div className={style.scaleBlock2SecondPage}>
              <div className={style.positionImg1Block2SecondPage}>
                <img
                  src={MainPageConfig.incTwoBlock2SecPage}
                  alt="imgSecondPage"
                />
              </div>
              <div className={style.positionImg2Block2SecondPage}>
                <img
                  src={MainPageConfig.incOneBlock2SecPage}
                  alt="imgSecondPage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.thirdPage}>
        <div>
          <div>Наши услуги</div>
        </div>
        <div>
          <div>Планировка за 10 000 ₽</div>
        </div>
        <div>
          <div>Срок выполнения: 5 дней</div>
        </div>
        <div>
          <div>
            Мы разработаем для вас уникальное
            <br /> планировочное решение квартиры, которое
            <br /> будет соответствовать как нормам
            <br /> эргономики, так и вашим личным
            <br /> пожеланиям, а также подготовим чертеж для
            <br /> согласования планировки.
          </div>
        </div>
        <div>
          <div>
            <hr />
          </div>
          <ul>
            <li>2 варианта планировки + финальный</li>
            <li>обмерный план</li>
            <li>план демонтажа стен</li>
            <li>план монтажа перегородок</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
