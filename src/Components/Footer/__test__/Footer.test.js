import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { FaCalendarAlt } from "react-icons/fa";

describe('Footer', () => {
  it('should render without crashing', () => {
    render(<Footer />);
    expect(screen.getByText('VEN A VISITARNOS')).toBeInTheDocument();
  });

  it('should contain the correct address link', () => {
    render(<Footer />);
    const addressLink = screen.getByRole('link', { name: /Av. de Isabel la Católica, 5,/ });
    expect(addressLink).toHaveAttribute('href', 'https://maps.app.goo.gl/TrdWgmpdWXvLi7dq7');
  });

  it('should contain the correct opening hours', () => {
    render(<Footer />);
    expect(screen.getByText(/De Miércoles a Sábado/)).toBeInTheDocument();
    expect(screen.getByText(/12:30 - 17:00 y 20:00 - 23:30/)).toBeInTheDocument();
    expect(screen.getByText(/Domingo/)).toBeInTheDocument();
    expect(screen.getByText(/12:30 - 17:00/)).toBeInTheDocument();
    expect(screen.getByText(/Lunes y Martes/)).toBeInTheDocument();
    expect(screen.getByText(/Cerrado/)).toBeInTheDocument();
  });

  it('should contain the correct contact phone numbers', () => {
    render(<Footer />);
    const contactLink = screen.getByRole('link', { name: /Teléfono: 652196890-636965465/ });
    expect(contactLink).toHaveAttribute('href', '#');
  });

  it('should contain the correct legal links', () => {
    render(<Footer />);
    const legalLinks = screen.getAllByRole('link', { href: /^\//});
    expect(legalLinks[0]).toHaveAttribute('href', '/legal-warning');
    expect(legalLinks[0]).toHaveTextContent('Aviso Legal');
    expect(legalLinks[1]).toHaveAttribute('href', '/privacy-policy');
    expect(legalLinks[1]).toHaveTextContent('Política de privacidad');
    expect(legalLinks[2]).toHaveAttribute('href', '/cookies-policy');
    expect(legalLinks[2]).toHaveTextContent('Política de cookies');
  });

  it('should contain the correct copyright information', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/La alegría de vivir 99º/);
    expect(copyrightText).toBeInTheDocument();
  });

  it('should contain the FaCalendarAlt icon', () => {
    render(<Footer />);
    const calendarIcons = screen.getAllByTestId('calendar-icon');
    expect(calendarIcons).toHaveLength(3);
    calendarIcons.forEach(icon => {
      expect(icon).toContainElement(<FaCalendarAlt />);
    });
  });
});