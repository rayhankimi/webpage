
import { Typography } from "@material-tailwind/react";

export function NavList(): JSX.Element {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                placeholder="" // Tambahkan placeholder jika diperlukan
                onPointerEnterCapture={() => {}} // Fungsi kosong sebagai pengganti
                onPointerLeaveCapture={() => {}} // Fungsi kosong sebagai pengganti
            >
                <a href="#" className="flex items-center">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
            >
                <a href="#" className="flex items-center">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
            >
                <a href="#" className="flex items-center">
                    Portfolio
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
            >
                <a href="#" className="flex items-center">
                    Contacts
                </a>
            </Typography>
        </ul>
    );
}
