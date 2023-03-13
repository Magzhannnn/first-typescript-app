interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <h1 className="text-center text-red-600">{error}</h1>;
};

export default ErrorMessage;
