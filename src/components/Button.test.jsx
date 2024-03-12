// Hello.test.js
import Hello from "./Hello";
import { render, screen } from "@testing-library/react";

test("버튼이라는 텍스트가 렌더링 되는지 테스트 합니다.", () => {
  // Arrange: test data를 셋업
  render(<Button>버튼</Button>);

  // Act: 버튼 클릭에 대한 시뮬레이션 등등 함수, 로직을 실행

  // Assert: 브라우저의 아웃풋을 확인하고 기대값과 비교 (가상 DOM을 확인)
  const helloWorldElement = screen.getByText("버튼", { exact: false });
  // or screen.getByText('Hello World')
  expect(helloWorldElement).toBeInTheDocument();
});

test("버튼이 클릭이 되는지 확인합니다.", () => {
  const mockedGetData = jest.fn(id).mockResolvedValue(mockedDataList[id]);

  // Arrange: test data를 셋업
  render(<Button>버튼</Button>);

  // Act: 버튼 클릭에 대한 시뮬레이션 등등 함수, 로직을 실행
  // Assert: 브라우저의 아웃풋을 확인하고 기대값과 비교 (가상 DOM을 확인)
  const helloWorldElement = screen("버튼", { exact: false });
  // or screen.getByText('Hello World')
  expect(helloWorldElement).toBeInTheDocument();
});
