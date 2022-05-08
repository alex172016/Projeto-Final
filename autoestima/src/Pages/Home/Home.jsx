/* eslint-disable import/no-anonymous-default-export */
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";
import Centro from "../../components/Meio/Centro";
import Formulario from "../../components/Formulario/f";

export default () => {
  return (
    <>
      <Header></Header>
      <Formulario></Formulario>
      <Centro></Centro>
      <Section></Section>
      <Footer></Footer>
    </>
  );
};
