import ErrorComponent from './ErrorComponent'
import {render} from '@testing-library/react-native'

describe("ErrorComponent", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    });
    
    it("should render the error component container", () => {
        const {getByTestId} = render(<ErrorComponent />);
        const container = getByTestId("error-container-test-id");

        expect(container).toBeDefined()
    });

    it('should render the error message', () => {
        const {getByText} = render(<ErrorComponent />);
        const errorHeading = getByText("Failed to load users");
        expect(errorHeading).toBeDefined()
    });

    it('should render custom error message', () => {
        const {getByTestId} = render(<ErrorComponent error={{message: "please try again latter"}} />);
        const errorMessage = getByTestId("error-text-test-id")
        expect(errorMessage).toBeDefined();
        expect(errorMessage.children).toContain("please try again latter")
    })
})