import { Link } from "react-router-dom";
import { MainPageConfig } from "../mainPage/MainPageConfig";
import style from "./style.module.scss";
//привет
const Header = () => {
  return (
    <header className={style.headerMainPage}>
      <div>
        <div className={style.logoh5}>
          Simple <span className={style.logoTextDecoration}>Design</span>
        </div>
        <div className={style.logoh6}>дизайн интерьера</div>
      </div>
      <nav className={style.navHeader}>
        <a href="/">Главная</a>
        <a href="/">Тест</a>
        <a href="/">Каталог</a>
        <a href="/">О нас</a>
        <Link to="/services-prices">Цены</Link>
      </nav>
      <div className={style.block3Header}>
        <div>
          <img src={MainPageConfig.itemPhone} alt="phone" />
        </div>
        <div>
          <div className={style.phoneNumber}>+7 700 505 3000</div>
          <div className={style.dateWord}>с 9:00 до 18:00</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
