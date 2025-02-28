import { Breadcrumb } from '../../components/Breadcrumb'
import { MapsComponent } from '../../components/MapsComponent'
import { FooterSocial } from '../../components/Footer/FooterSocial'
import { TitlePage } from '../../components/TitlePage'
import { NextSeo } from 'next-seo'

export default function ContactUs() {
    return (
        <>
            <NextSeo
                title="Entre em contato"
                description="Entre em contato conosco pelo Whatasapp (62) 3290-7222"
            />
            <Breadcrumb pageName="Fale conosco" />
            <div className="container pl-4 pr-4">
                <TitlePage description="Fale" descriptionSpan="conosco" />
                <div className="row">
                    <div className="col-lg-4 institucional">
                        <p><span>Endereço</span></p>
                        <p>
                            Av. Ville Qd 26 Lt 34 N° 1983 - <br /> Residencial Center Ville, Goiânia - GO <br />
                            CEP: 74369-023 <br />
                            Telefone: (62) 3290-7222 <br />
                            Whatsapp: (62) 3290-7222 <br />
                        </p>
                        <FooterSocial />
                    </div>

                    <div className="col-lg-6 mb-4">
                        <MapsComponent />
                    </div>
                </div>
            </div>
        </>
    )
}
