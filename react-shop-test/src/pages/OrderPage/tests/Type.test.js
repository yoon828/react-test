import { render, screen } from "@testing-library/react"
import Type from '../Type'

test("displays product images from server", async () => {
  render(<Type orderType="products" />)

  //findAllByRole 함수가 비동기이기 때문에 async/await 걸어줘야함
  const productImages = await screen.findAllByRole("img", {
    name: /product$/i,
  })
  expect(productImages).toHaveLength(2)

  const altText = productImages.map((element) => element.alt);
  expect(altText).toEqual(["America product", "England product"])
})