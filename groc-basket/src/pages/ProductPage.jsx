import { useState, useEffect } from "react";
import { Box, Grid, Checkbox, Stack, Text } from "@chakra-ui/react";
import Product_right_grid from "../Component/Product_sections/Product_right_grid";
import { useSelector } from "react-redux";
import BorderBottom from "../Component/Product_sections/BorderBottom";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [category, setCategory] = useState(searchParam.getAll("price") || []);
  const product_data = useSelector((store) => store.productdata.products);
  const [temp, setTemp] = useState([]);

  const handleFilter = (e) => {
    let option = e.target.value;

    let newCategory = [...category];
    if (newCategory.includes(option)) {
      // if already available then remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      if (option === "p1") {
        console.log("before:-", temp)
        let priceFilter = product_data.filter((item) => {
          return Number(item.price) < 20;
        });
        setTemp(priceFilter);
        console.log("After:-", temp)
        newCategory.push(option);
      }
      if (option === "p2") {
        let priceFilter = product_data.filter((item) => {
          return Number(item.price) > 21 && Number(item.price) < 50;
        });
        setTemp(priceFilter);
        newCategory.push(option);
      }
      if (option === "p3") {
        let priceFilter = product_data.filter((item) => {
          return Number(item.price) > 51 && Number(item.price) < 100;
        });
        setTemp(priceFilter);
        newCategory.push(option);
      }
      if (option === "p4") {
        let priceFilter = product_data.filter((item) => {
          return Number(item.price) > 101 && Number(item.price) < 200;
        });
        setTemp(priceFilter);
        newCategory.push(option);
      }
      if (option === "p5") {
        let priceFilter = product_data.filter((item) => {
          return Number(item.price) > 201 && Number(item.price) < 500;
        });
        setTemp(priceFilter);
        newCategory.push(option);
      }
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    console.log("123456789");
    setTemp(product_data);
    const params = {};
    category && (params.price = category);
    setSearchParam(params);
  }, [category, setSearchParam, temp]);

  // console.log("category", category);
  console.log("Data", temp);
  return (
    <Box w={{ base: "90%", lg: "75%" }} m="auto">
      <Grid
        gridTemplateColumns={{ base: "1fr", lg: ".25fr 1fr" }}
        h="auto"
        p="15px 10px"
      >
        <Box
          borderRight={{ lg: "1px solid #ccc" }}
          display={{ base: "none", lg: "block" }}
        >
          <Box position="sticky" bottom={0} top={0} pr="15px">
            <BorderBottom category="Category" />
            <Box mb="2rem">
              <Text
                fontSize={{ base: "10px", lg: "14px" }}
                fontWeight="500"
                fontFamily=""
                color="#62a15"
                textAlign="left"
              >
                Fruits and vegitables
              </Text>
            </Box>
            <Box mb="2rem">
              {/* Price*/}
              <BorderBottom category="Price" />
              <Box>
                <Stack spacing={[]} direction={["column"]}>
                  <Checkbox
                    value="p1"
                    onChange={handleFilter}
                    defaultChecked={category.includes("p1")}
                  >
                    Less than Rs 20
                  </Checkbox>
                  <Checkbox
                    value="p2"
                    onChange={handleFilter}
                    defaultChecked={category.includes("p2")}
                  >
                    Rs 21 to Rs 50{" "}
                  </Checkbox>
                  <Checkbox
                    value="p3"
                    onChange={handleFilter}
                    defaultChecked={category.includes("p3")}
                  >
                    Rs 51 to Rs 100{" "}
                  </Checkbox>
                  <Checkbox
                    value="p4"
                    onChange={handleFilter}
                    defaultChecked={category.includes("p4")}
                  >
                    Rs 101 to Rs 200{" "}
                  </Checkbox>
                  <Checkbox
                    value="p5"
                    onChange={handleFilter}
                    defaultChecked={category.includes("p5")}
                  >
                    Rs 201 to Rs 500
                  </Checkbox>
                </Stack>
              </Box>
            </Box>

            <Box mb="2rem">
              {/* Discount*/}
              <BorderBottom category="Discount" />
              <Box>
                <Stack spacing={[]} direction={["column"]}>
                  <Checkbox value="naruto">1% - 5% (1)</Checkbox>
                  <Checkbox value="sasuke">5% - 10% </Checkbox>
                  <Checkbox value="kakashi">10% - 20% </Checkbox>
                  <Checkbox value="naruto">20% - 40%</Checkbox>
                  <Checkbox value="sasuke">More than 40%</Checkbox>
                </Stack>
              </Box>
            </Box>
            <Box mb="2rem">
              {/* Pack Size*/}
              <BorderBottom category="Pack Size" />
              <Box>
                <Stack spacing={[]} direction={["column"]}>
                  <Checkbox value="naruto">100g - 150g</Checkbox>
                  <Checkbox value="sasuke">150g - 250g</Checkbox>
                  <Checkbox value="kakashi">250g - 500g</Checkbox>
                  <Checkbox value="naruto">1pc - 2pc</Checkbox>
                  <Checkbox value="sasuke">2pc and more..</Checkbox>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Product_right_grid temp={temp} />
        </Box>
      </Grid>
    </Box>
  );
};

export default ProductPage;
