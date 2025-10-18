import BannerHomeImg from "../../assets/Banner-home.png"
import BannerAboutImg from "../../assets/Banner-about.png"
import stylesHome from "./BannerHome.module.css"
import stylesAbout from "./BannerAbout.module.css"

export default function Banner({ type = "home" }) {

   const isHome = type === "home"
   const imageSrc = isHome ? BannerHomeImg : BannerAboutImg

   return(
      <div className={stylesAbout.banner}>
         <img className={stylesAbout.bannerImg} src={imageSrc} alt="" />
         {isHome && (
            <div className={stylesHome.bannerTxt}>
               <p>Chez vous, partout et ailleurs</p>
            </div>
         )}
      </div>
   )
}