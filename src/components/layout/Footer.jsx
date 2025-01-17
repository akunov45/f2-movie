
import TelIcon from "../../assets/tel.svg"
import EmailIcon from "../../assets/email.svg"
import TelegramIcon from "../../assets/telegram.svg"

const icons = [TelIcon, EmailIcon, TelegramIcon]

const Footer = () => {
    return (
        <div className="bg-[#1a1a1a]">
            <div className="app-container py-[48px] text-white flex justify-between">
                <div>
                    <h4 className="mb-[20px]">Cinemax</h4>
                    {["О нас", "Блог", "Вакансии", "Акции"].map(item => {
                        return <p className="mb-[20px]" key={item}>{item}</p>
                    })}
                </div>
                <div>
                    <h4 className="mb-[20px]">Помощь</h4>
                    {["Вопросы и ответы", "Контакты"].map(item => {
                        return <p className="mb-[20px]" key={item}>{item}</p>
                    })}
                </div>
                <div className="w-[255px]">
                    <h4 className="mb-[20px]">Поддержка</h4>
                    <p>Мы всегда готовы вам помочь.
                        Наши операторы онлайн 24/7</p>
                    <div className="flex gap-[10px]">
                        {icons.map((icon, index) => {
                            return <div key={index} className="w-[26px] flex items-center justify-center h-[26px] bg-[#EF4234] rounded-full">
                                <img src={icon} alt="" />
                            </div>
                        })}
                    </div>
                    <button>Написать в чате</button>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer