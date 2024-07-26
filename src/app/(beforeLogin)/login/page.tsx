import React from 'react';
import {redirect} from "next/navigation";
import MainComponent from "@/app/(beforeLogin)/_component/MainComponent";

/**
 * page
 */
export default function Login(){
    redirect('/i/flow/login');

}