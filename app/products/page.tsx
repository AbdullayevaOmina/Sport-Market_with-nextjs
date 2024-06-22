import { homeIcon, strelkaRightIcon } from "@/assets/icons/global";
import { Input, Select, Slider } from "antd";
import Link from "next/link";

const Products = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="h-[100vh]  bg-[#F2F2F2]">
      <div className="container bg-[#F2F2F2]">
        <div className="flex gap-3 items-center text-gray-600 py-2">
          {homeIcon} <Link href={"/"}>Главная</Link> {strelkaRightIcon}
          <Link href={"/products"}>Продукты</Link>
        </div>

        <div className="flex gap-5">
          <div className="w-[20%]">
            <div className="w-[292px] h-[522px] bg-white rounded-lg p-[18px] flex flex-col gap-4">
              <h3>Филтрь</h3>
              <small>Цена</small>
              <div className="w-[256px] h-[82px] bg-[#F2F2F2] rounded-lg p-4">
                <Slider
                  range={{ draggableTrack: true }}
                  defaultValue={[20, 50]}
                />
                <div className="flex justify-between">
                  <span>3 000 uzs</span>
                  <span>40 000 uzs</span>
                </div>
              </div>
              <small>Артикул:</small>
              <Input placeholder="аф566" variant="filled" />
              <small>Выберите категорию:</small>
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </div>
          </div>
          <div className="w-[80%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Products;
