import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find the property you love',
  description: 'Find the property you love',
  keywords: [
    'property',
    'rentals',
    'buy properties',
    'sell properties',
    'find properties',
  ],
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
