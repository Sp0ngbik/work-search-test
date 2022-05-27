import style from "./style.module.scss";
import { servicesConfig } from "./ServicesPricesConfig";

const ServicesPrices = () => {
  return (
    <div>
      <div className={style.selectionHead}>
        <div className={style.layout}>
          <div>Планировка</div>
        </div>
        <div className={style.design}>
          <div>Дизайн-проект</div>
        </div>
      </div>
      <section className={style.selectionContent}>
        <div className={style.selectionContentLeftBlock}>
          <h3>
            Мы разработаем для вас уникальное планировочное решение квартиры,
            которое будет соответствовать как нормам эргономики, так и вашим
            личным пожеланиям, а также подготовим чертеж для согласования
            планировки.
          </h3>
          <h4>Вам подойдет, если:</h4>
          <ul>
            <li>Вы купили квартиру без отделки и планируете начать ремонт;</li>
            <li>
              Вы приобрели квартиру с ремонтом, и не понимаете, как правильно
              зонировать ее и расставить мебель;
            </li>
            <li>
              Вы хотите изменить интерьер квартиры, в которой уже проживаете.
            </li>
          </ul>
          <h4>Срок выполненния: </h4>
          <h3>5 рабочих дней после получения замера</h3>
          <h5>Вы получите: </h5>
          <ul>
            <li>2 варианта планировки + финальный</li>
            <li>план демонтажа стен</li>
            <li>план монтажа перегородок</li>
          </ul>
          <div className={style.serviceCost}>
            <h5>Цена услуги:</h5>
            <span>99 000 тг</span>
          </div>
          <div className={style.buttonSection}>
            <button className={style.bucketButton}>
              <img src={servicesConfig.bucketImg} alt="bucketImg not found" />В
              корзину
            </button>
            <button className={style.moreContent}>Посмотреть пример</button>
          </div>
        </div>
        <div className={style.selectionContentRightBlock}>
          <h3>
            Мы разработаем для вас уникальное планировочное решение квартиры,
            которое будет соответствовать как нормам эргономики, так и вашим
            личным пожеланиям. <br />
            <br /> Затем мы подготовим альбом, состоящий из 12 чертежей,
            необходимых строителям для ремонта. <br />
            <br />
            <span>
              * также, вы можете дополнительно выбрать любой дизайн из нашего  
              <a href="ce">каталога</a>, и мы добавим его в ваш проект.
            </span>
          </h3>
          <h4 className={style.rightBlockFirstChild}>Вам подойдет, если:</h4>
          <ul>
            <li>
              Вы купили квартиру в новостройке, и нужен чёткий план на ремонт;
            </li>
            <li>
              Вы хотите полностью переделать квартиру с уже готовой отделкой или
              вторичку;
            </li>
            <li>
              Вы планируете бюджетный ремонт квартиры для дальнейшей сдачи в
              аренду.
            </li>
          </ul>
          <h4>Срок выполненния: </h4>
          <ul>
            <li>
              5 рабочих дней после получения замера - составление планировки
            </li>
            <li>
              7 рабочих дней после согласования планировочного решения -
              подготовка комплекта чертежей
            </li>
          </ul>
          <h4>Вы получите: </h4>
          <ul>
            <li>2 варианта планировки + финальный</li>
            <li>план демонтажа стен</li>
            <li>розетки, выключатели, освещение</li>
            <li>сантехника план потолка</li>
            <li> план пола и плинтусов </li>
            <li> план дверей</li>
          </ul>
          <div className={style.serviceCost}>
            <h5>Цена услуги:</h5>
            <span>199 000 тг</span>
          </div>
          <div className={style.buttonSection}>
            <button className={style.bucketButton}>
              <img src={servicesConfig.bucketImg} alt="bucketImg not found" />В
              корзину
            </button>
            <button className={style.moreContent}>Посмотреть пример</button>
          </div>
        </div>
      </section>
      <section className={style.additionalServices}>
        <h1>Дополнительные услуги</h1>
        <div className={style.imageBlockAddServ}>
          <div>
            <img src={servicesConfig.addServ1} alt="addServ1 not found" />
            <p> Тендер строительных бригад</p>
          </div>
          <div>
            <img src={servicesConfig.addServ2} alt="addServ2 not found" />
            <p>Составление сметы</p>
          </div>
          <div>
            <img src={servicesConfig.addServ3} alt="addServ3 not found" />
            <p> Печать альбома</p>
          </div>
        </div>
      </section>
      {/* next lvl animation */}
      <section className={style.mainQuestions}>
        <h1>Часто задаваемые вопросы</h1>
        <div className={style.questionButtons}>
          <button>
            <img src={servicesConfig.crossCircle} alt="cross1 not found" />
            Вопрос
          </button>
          <button>
            <img src={servicesConfig.crossCircle} alt="cross1 not found" />
            Вопрос
          </button>
          <button>
            <img src={servicesConfig.crossCircle} alt="cross1 not found" />
            Вопрос
          </button>
          <button>
            <img src={servicesConfig.crossCircle} alt="cross1 not found" />
            Вопрос
          </button>
          <button>
            <img src={servicesConfig.crossCircle} alt="cross1 not found" />
            Вопрос
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPrices;
