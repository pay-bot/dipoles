import FooterNavItem from "./FooterNavItem"

export default function FooterNav() {
  return (
    <>

      <ul className="flex items-center space-x-10 justify-start pt-4" >

        <FooterNavItem>Paket Harga</FooterNavItem>
        <FooterNavItem>Home</FooterNavItem>
        <FooterNavItem>About</FooterNavItem>
        <FooterNavItem>Portofolio</FooterNavItem>

      </ul >
    </>

  )
}