import { useLocation, useNavigate } from "react-router-dom";
import EditContact from "./EditContact";

export default function EditWrapper(props) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <EditContact
      {...props}
      location={location}
      navigate={navigate}
    />
  );
}
