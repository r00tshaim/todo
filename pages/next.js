import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const NextPage = () => {
  const { t } = useTranslation();
  console.log(t("test"));
  return (
    <div>
      <h1>{t("test")}</h1>
      <Link href="/">Home</Link>
    </div>
  );
};

export default NextPage;
