const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen w-full items-center bg-dark-2 justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
