import { useRouter } from "next/router";

function Company() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <p>Company: {id}</p>
        </div>
    );
}

export default Company;
