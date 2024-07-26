"use client";

import LoginModal from "@/app/(beforeLogin)/_component/LoginModal";
import {redirect, useRouter} from "next/navigation";

export default function Page() {
    return (
        <LoginModal/>
    )
}

// router push 뒤로가기 하면 바로 뒤에
//router replace 뒤로가기 하면 바로 뒤에 뒤에