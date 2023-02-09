import LogoSVG from "../assets/logo.svg";

export const Header = () => {
  return (
    <>
      <LogoSVG classname="h-10" title={false} />
      <li className="flex gap-6">
        <ul className="grow">Proyectos</ul>
        <ul className="grow">Oficina</ul>
        <ul className="grow">Outdoor</ul>
        <ul className="grow">Tienda</ul>
        <ul className="grow">Contacto</ul>
        <ul className="grow">Cuenta</ul>
      </li>
    </>
  );
};

export default Header;
