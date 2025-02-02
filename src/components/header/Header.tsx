import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { navigateToHome } from "../../utils/globalFunctions";
import { useTranslation } from "react-i18next";

const Header: FC = () => {

    const navigate = useNavigate();
    useStyles();
    const { t } = useTranslation("translation", { keyPrefix: "HEADER" });

    return <header>
        <p onClick={() => navigateToHome(navigate)} title="לדף הבית">{t("LOGO")}</p>
    </header>
}
export default Header;

