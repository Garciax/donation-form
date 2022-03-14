import cn from "./DonationPage.module.scss"
import DonationForm from "../../components/DonationForm/DonationForm";

/**
 * Страница пожертвования
 */
const DonationPage = () => {
  return (
    <div className={cn.container}>
      <DonationForm />
    </div>
  );
};

export default DonationPage;
