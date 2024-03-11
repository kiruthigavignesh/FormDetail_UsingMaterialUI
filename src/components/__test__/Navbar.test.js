import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../newuser/Navbar";

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));

describe('Navbar', () => {
  it('should contain a navbar test and logo name', async () => {
    render(<Navbar />);
    
    const headingTitle = screen.getByText(/Instrive Labs/i);
    expect(headingTitle).toBeInTheDocument();
  });


it('should call toggleLoginDrawer when login button is clicked', () => {
    // Render the Navbar component with toggleLoginDrawerMock as a prop
    render(<Navbar toggleLoginDrawer={toggleLoginDrawerMock} />);
    
    // Find the login button by its text
    const loginButton = screen.getByText("Login");
  
    // Simulate a click event on the login button
    fireEvent.click(loginButton);
  
    // Check if toggleLoginDrawerMock was called with the expected argument
    expect(toggleLoginDrawerMock).toHaveBeenCalledWith(true);
  });
  

  
});

