import { BiLogoNetlify, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import {DiGithubAlt, DiMongodb, DiMysql} from "react-icons/di";
import {FaDocker, FaJava} from "react-icons/fa";
import { FaAws, FaCss3Alt, FaDigitalOcean, FaGitAlt, FaGitlab, FaHtml5, FaNodeJs, FaPython, FaReact, FaVuejs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import {
    SiAntdesign,
    SiExpress,
    SiFlask,
    SiJest,
    SiNuxtdotjs,
    SiPassport,
    SiPostman,
    SiPythonanywhere,
    SiSequelize,
    SiTailwindcss,
    SiTensorflow,
    SiWordpress,
    SiWoocommerce,
    SiLaravel,
    SiRedis,
    SiBootstrap, SiTypescript, SiJavascript, SiPhp
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Skills() {
    return (
        <section id="skills" className="mx-4 lg:mx-20">
            {/* =========== SKILLS TITLE =========== */}
            <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">
                Tech Stack
            </h4>
            {/* =========== FRONTEND SKILLS =========== */}
            <h5 className="text-2xl font-semibold mt-8 dark:text-white">Frontend</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        <span
            className="inline-flex items-center justify-between gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaHtml5 className="text-2xl"/> HTML
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaCss3Alt className="text-2xl"/> CSS
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaReact className="text-2xl"/> React
        </span>
                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaReact className="text-2xl"/> Next JS
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiTailwindcss className="text-2xl"/> Tailwind
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiBootstrap className="text-2xl"/> Bootstrap
        </span>
            </div>

            {/* =========== BACKEND SKILLS =========== */}
            <h5 className="text-2xl font-semibold mt-8 dark:text-white">Backend</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        <span
            className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiExpress className="text-2xl"/> Express
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaNodeJs className="text-2xl"/> NodeJS
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiLaravel className="text-2xl"/> Laravel
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiRedis className="text-2xl"/> Redis
        </span>
            </div>

            <h5 className="text-2xl font-semibold mt-8 dark:text-white">Languages</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        <span
            className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiPhp className="text-2xl"/> PHP
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiJavascript className="text-2xl"/> JavaScript
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiTypescript className="text-2xl"/> TypeScript
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaJava className="text-2xl"/> Java
        </span>
            </div>

            {/* =========== TOOLS & DEVOPS =========== */}
            <h5 className="text-2xl font-semibold mt-8 dark:text-white">Tools</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        <span
            className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaDocker className="text-2xl"/> Docker
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <FaGitAlt className="text-2xl"/> Git
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <DiGithubAlt className="text-2xl"/> Github
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiPostman className="text-2xl"/> Postman
        </span>
            </div>

            {/* =========== DATABASES =========== */}
            <h5 className="text-2xl font-semibold mt-8 dark:text-white">Databases</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <DiMysql className="text-2xl"/> MySQL
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <BiLogoPostgresql className="text-2xl"/> PostgreSQL
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <DiMongodb className="text-2xl"/> MongoDB
        </span>
            </div>

            <h5 className="text-2xl font-semibold mt-8 dark:text-white">CMS & eCommerce</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        <span
            className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiWordpress className="text-2xl"/> Wordpress
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiWoocommerce className="text-2xl"/> Woocommerce
        </span>

                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <SiWoocommerce className="text-2xl"/> WooCommerce Plugins
        </span>
            </div>
        </section>
    );
}

export default Skills;

