export function useHandleChange () {
      const [values, setValues] = useState ({
        fullname: "",
        email:"",
        hobby:false,
      });

      const handleInputChange = (e)=>{
        const type = e.target.type;
        setValues({
              ...values,
              [e.target.name]: type ==='checkbox' ? e.target.checked : e.target.value,
            });
      }
}
