import { useContext, useState } from "react";

import { LanguageContext } from "../../context/language-context";
import slideLocalization from "../../localization/home.json";
import Input from "../input";
import Button from "../button";
import Dropdown from "../dropdown";

import countries from "../../data/countries.json";

function CalculatorSlide(): JSX.Element {
  const { language } = useContext(LanguageContext);

  const [sunHoursPerYear, setSunHoursPerYear] = useState<number>(0);
  const [pricePerkW, setPricePerkW] = useState<number>(0);
  const [warehouseArea, setWarehouseArea] = useState<number>(0);
  const [lampsAmount, setLampsAmount] = useState<number>(0);
  const [oneLampConsumption, setOneLampConsumption] = useState<number>(0);
  const [workingHoursPerDay, setWorkingHoursPerDay] = useState<number>(0);
  const [workingDaysPerYear, setWorkingDaysPerYear] = useState<number>(0);
  const [electricityTax, setElectricityTax] = useState<number>(0);

  // Results
  const [totalElectricitySavings, setTotalElectricitySavings] = useState(0);
  const [
    totalElectricitySavingsInPercents,
    setTotalElectricitySavingsInPercents,
  ] = useState(0);
  const [co2SavingsInTonnes, setCo2SavingsInTonnes] = useState(0);
  const [co2SavingsInEuro, setCo2SavingsInEuro] = useState(0);
  const [totalSavingsInEuro, setTotalSavingsInEuro] = useState(0);
  const [roi, setRoi] = useState(0);

  const localization = slideLocalization.calculatorSlide;

  const calculateConsumptionOfElectricityPerYear = (): number => {
    return (
      (lampsAmount *
        oneLampConsumption *
        workingHoursPerDay *
        workingDaysPerYear) /
      1000
    );
  };

  const handleCalculate = (): void => {
    const yearElectricityConsumtion =
      calculateConsumptionOfElectricityPerYear();

    const requiredNumberOfSolarOpticModules = warehouseArea / 100;
    const powerConsumption =
      ((workingHoursPerDay * workingDaysPerYear - sunHoursPerYear) *
        150 *
        requiredNumberOfSolarOpticModules) /
      1000;
    const electricitySaving =
      (sunHoursPerYear * lampsAmount * oneLampConsumption) / 1000;

    // Results
    const totalElectricitySavings =
      yearElectricityConsumtion - powerConsumption - electricitySaving;

    setTotalElectricitySavings(totalElectricitySavings);

    const totalElectricitySavingsInPercents =
      (totalElectricitySavings / yearElectricityConsumtion) * 100;

    setTotalElectricitySavingsInPercents(
      isNaN(totalElectricitySavingsInPercents)
        ? 0
        : totalElectricitySavingsInPercents
    );

    const co2SavingsInTonnes = (totalElectricitySavings / 1000) * 0.9;

    setCo2SavingsInTonnes(isNaN(co2SavingsInTonnes) ? 0 : co2SavingsInTonnes);

    const co2SavingsInEuro = co2SavingsInTonnes * 100;

    setCo2SavingsInEuro(isNaN(co2SavingsInEuro) ? 0 : co2SavingsInEuro);

    const totalSavingsInEuro =
      (totalElectricitySavings * (electricityTax + pricePerkW)) / 100 +
      co2SavingsInEuro;

    setTotalSavingsInEuro(isNaN(totalSavingsInEuro) ? 0 : totalSavingsInEuro);

    const electricityCostsForLightning =
      (yearElectricityConsumtion * (electricityTax + pricePerkW)) / 100;
    const roi = electricityCostsForLightning / totalSavingsInEuro;

    setRoi(isNaN(roi) ? 0 : roi);
  };

  const handleSelectCountry = (countryName: string): void => {
    const countryData = countries.find(
      ({ country }) => country[language] === countryName
    );

    if (countryData) {
      setSunHoursPerYear(countryData.sunHoursPerYear);
      setPricePerkW(countryData.pricePerKW + countryData.electricityTax);
      setElectricityTax(countryData.electricityTax);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 mt-16">
        <div className="text-3xl">{localization.title[language]}</div>
        <div className="text-2xl">{localization.subtitle[language]}</div>
      </div>
      <div className="flex justify-center w-full gap-10 2xl:gap-16 xl:px-24 mt-10 2xl:mt-10 2xl:min-h-[600px] relative">
        <div className="bg-accent-yellow absolute top-0 left-0 rounded-full w-[400px] 2xl:w-[700px] blur-[100px] h-[700px] z-[-1]"></div>
        <div className="flex flex-col items-center shadow-lg z-1 pb-4 h-[400px] 2xl:h-[550px] swiper-no-swiping overflow-y-scroll 2xl:overflow-y-clip overflow-x-hidden xl:w-1/2 2xl:w-[700px] relative bg-white rounded-3xl">
          <div className="p-12 flex flex-col items-center">
            <div className="text-2xl">
              {localization.calculator.title[language]}
            </div>
            <div className="text-xl">
              {localization.calculator.subtitle[language]}
            </div>
          </div>
          <div className="flex flex-col items-end w-full xl:pr-6 pb-4">
            <div>
              <Dropdown
                onChange={handleSelectCountry}
                description={
                  localization.calculator.country.description[language]
                }
                tooltip={localization.calculator.country.tooltip[language]}
              />
            </div>
            <div>
              <Input
                description={
                  localization.calculator.sunHoursPerYear.description[language]
                }
                tooltip={
                  localization.calculator.sunHoursPerYear.tooltip[language]
                }
                onChange={value => setSunHoursPerYear(value)}
                type="number"
                defaultValue={sunHoursPerYear}
              />
            </div>
            <div>
              <Input
                description={
                  localization.calculator.pricePerkW.description[language]
                }
                tooltip={localization.calculator.pricePerkW.tooltip[language]}
                onChange={value => setPricePerkW(value)}
                type="number"
                defaultValue={pricePerkW}
              />
            </div>
            <div>
              <Input
                description={
                  localization.calculator.warehouseArea.description[language]
                }
                tooltip={
                  localization.calculator.warehouseArea.tooltip[language]
                }
                onChange={value => setWarehouseArea(value)}
                type="number"
              />
            </div>
            <div>
              <Input
                description={
                  localization.calculator.lampsAmount.description[language]
                }
                tooltip={localization.calculator.lampsAmount.tooltip[language]}
                onChange={value => setLampsAmount(value)}
                type="number"
              />
            </div>
            <div>
              <Input
                description={
                  localization.calculator.oneLampConsumption.description[
                    language
                  ]
                }
                tooltip={
                  localization.calculator.oneLampConsumption.tooltip[language]
                }
                onChange={value => setOneLampConsumption(value)}
                type="number"
              />
            </div>
            <div>
              <Input
                description={
                  localization.calculator.workingHoursPerDay.description[
                    language
                  ]
                }
                tooltip={
                  localization.calculator.workingHoursPerDay.tooltip[language]
                }
                onChange={value => setWorkingHoursPerDay(value)}
                type="number"
              />
            </div>
            <div>
              <Input
                description={
                  localization.calculator.workingDaysPerYear.description[
                    language
                  ]
                }
                tooltip={
                  localization.calculator.workingDaysPerYear.tooltip[language]
                }
                onChange={value => setWorkingDaysPerYear(value)}
                type="number"
              />
            </div>
          </div>
        </div>
        <div className="bg-accent-yellow absolute top-0 right-[10%] rounded-full w-[400px] blur-[100px] h-[400px] z-[-1]"></div>
        <div className="shadow-lg z-1 relative bg-white p-2 h-[400px] 2xl:h-[550px] swiper-no-swiping overflow-y-scroll 2xl:overflow-y-clip overflow-x-hidden xl:w-1/2 2xl:w-[700px] rounded-3xl">
          <div className="flex flex-col p-12 items-center">
            <div className="text-2xl pb-10">
              {localization.results.title[language]}
            </div>
            <div className="flex w-full flex-col pointer-events-all">
              <div className="flex justify-evenly mb-10">
                <div className="flex flex-col items-center w-[200px] ">
                  <div className="text-3xl text-base-blue">
                    {totalElectricitySavings.toFixed(2)}
                  </div>
                  <div className="text-xl text-center">
                    {localization.results.electricitySavings[language]}
                  </div>
                </div>
                <div className="flex flex-col items-center w-[150px] ">
                  <div className="text-3xl text-base-blue">
                    {totalElectricitySavingsInPercents.toFixed(2)}
                  </div>
                  <div className="text-xl text-center">
                    {localization.results.totalSavings[language]}
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly mb-10">
                <div className="flex flex-col items-center w-[150px] ">
                  <div className="text-3xl text-base-blue">
                    {totalSavingsInEuro.toFixed(2)}
                  </div>
                  <div className="text-xl text-center">
                    {localization.results.euroSavings[language]}
                  </div>
                </div>
                <div className="flex flex-col items-center w-[150px] ">
                  <div className="text-3xl text-base-blue">
                    {co2SavingsInTonnes.toFixed(2)}
                  </div>
                  <div className="text-xl text-center">
                    {localization.results.totalCO2Savings[language]}
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="flex flex-col items-center w-[150px] ">
                  <div className="text-3xl text-base-blue">
                    {co2SavingsInEuro.toFixed(2)}
                  </div>
                  <div className="text-xl text-center">
                    {localization.results.co2Savings[language]}
                  </div>
                </div>
                <div className="flex flex-col items-center w-[150px] ">
                  <div className="text-3xl text-base-blue">
                    {roi.toFixed(2)}
                  </div>
                  <div className="text-xl text-center text-base-blue">
                    {localization.results.roi[language]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Button
          text={localization.getResultsButton[language]}
          onClick={handleCalculate}
        />
      </div>
    </div>
  );
}

export default CalculatorSlide;
