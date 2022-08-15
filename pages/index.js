import MainHero from "../components/MainHero";
import PrimaryButton from "../components/PrimaryButton";
import styles from "../styles/Home.module.scss";
export default function Home() {
  return (
    <div>
     <MainHero title={'Welcome to '} hlTitle={'rifeth.'} subtitle={'A raffle running on ethereum blockchain.'} excerpt={'Fund a contract, choose an NFT and randomly choose a winner.'} firstButton={'Get Started'}/>
    </div>
  );
}
