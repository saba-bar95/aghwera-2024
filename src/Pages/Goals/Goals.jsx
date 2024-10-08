import "./Goals.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import image1 from "/src/assets/images/goals-image1.png";
import image2 from "/src/assets/images/goals-image2.png";
import image3 from "/src/assets/images/goals-image3.png";
import image4 from "/src/assets/images/goals-image4.png";
import image5 from "/src/assets/images/goals-image5.png";
import { useState, useEffect } from "react";
import TopArrow from "../../components/TopArrow/TopArrow";
import Section from "../../components/Main.jsx/Section";

export default function Goals() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "ქარ"
  );

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  return (
    <>
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Section>
        <div className="goals-container">
          <h1>2024 წლის აღწერის მიზნები და ამოცანები</h1>
          <div className="images-container">
            <img src={image1} alt="baner1" className="image-1" />
            <img src={image2} alt="baner2" className="image-2" />
          </div>
          <div className="info-container">
            <p>
              2024 წლის აღწერა ტარდება საქართველოს ყველა ადმინისტრაციულ -
              ტერიტორიულ ერთეულში, გარდა ოკუპირებული ტერიტორიებისა, მოსახლეობის
              და სასოფლო მეურნეობების შესახებ ზუსტი მონაცემების მისაღებად, რაც
              აუცილებელია ქვეყნის სოციალურ-ეკონომიკური განვითარების
              პრიორიტეტების განსაზღვრისა და საზოგადოების ინფორმირების მიზნით.
            </p>
            <p className="header">სასოფლო-სამეურნეო აღწერა</p>
            <p>
              დანახარჯებისა და ადამიანური რესურსების ოპტიმალურად გამოყენების
              მიზნით, ასევე, იმის გათვალისწინებით, რომ საქართველოში
              სასოფლო-სამეურნეო აქტივობა და პროდუქციის წარმოება ძირითადად
              ხორციელდება შინამეურნეობების სექტორში, მოსახლეობის აღწერასთან
              ერთად ჩატარდება სასოფლო-სამეურნეო აღწერაც.
            </p>
            <img src={image3} alt="goals-image3" />
            <p className="header">აღწერა 2024-ის მიზნები</p>
            <p>
              აღწერის ფარგლებში შეგროვდება მონაცემები მოსახლეობის რიცხოვნობის,
              მისი სქესობრივ-ასაკობრივი შემადგენლობის, სხვადასხვა დემოგრაფიული
              და სოციალურ-ეკონომიკური მახასიათებლების მიხედვით. ასევე, აღწერა
              მოიცავს როგორც საცხოვრისებში და ინსტიტუციონალურ დაწესებულებებში
              მცხოვრებ მუდმივ მოსახლეობას, ისე უსახლკარო პირებს და მომთაბარე
              ჯგუფებს, რომლებიც აღწერის კრიტიკული მომენტისთვის მუდმივად
              ცხოვრობენ ქვეყნის ტერიტორიაზე. ამასთან, აღწერის ფარგლებში
              შეგროვდება ინფორმაცია, შინამეურნეობების სასოფლო-სამეურნეო
              აქტივობის შესახებ, კერძოდ, შინამეურნეობების სარგებლობაში არსებული
              მიწის სტრუქტურის, პირუტყვისა და ფრინველის სულადობის და სხვა
              მნიშვნელოვანი საკითხების შესახებ.
            </p>
            <img src={image4} alt="goals-image4" />
            <p className="header">აღწერა 2024-ის ამოცანები</p>
            <p>
              აღწერის შედეგების საფუძველზე ხელმისაწვდომი იქნება ზუსტი და
              განახლებული მონაცემები როგორც მოსახლეობის რაოდენობის, მისი
              სქესობრივ-ასაკობრივი შემადგენლობის, სხვადასხვა დემოგრაფიული,
              სოციალურ-ეკონომიკური მახასიათებლების მიხედვით, ასევე
              შინამეურნეობების სასოფლო-სამეურნეო აქტივობის შესახებ,
              თვითმმართველი ერთეულებისა და დასახლებების დონეზე
            </p>
            <p>
              აღწერები ტარდება ქვეყნის განვითარებისთვის, გეგმებისა და
              პროგრამების ეფექტიანი განხორციელების ხელშესაწყობად. აღწერა ასევე
              წარმოადგენს მნიშვნელოვან წყაროს გაეროს მდგრადი განვითარების 2030
              წლის მიზნების განხორციელების შესაფასებლად.
            </p>
            <img src={image5} alt="goals-image5" />
          </div>
        </div>
        <TopArrow />
      </Section>
      <Footer />
    </>
  );
}
