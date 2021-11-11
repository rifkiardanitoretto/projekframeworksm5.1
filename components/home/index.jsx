import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
export default function LandingPage() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row mt-4">
            <div className="col md-6">
              <div className="mt-5 landing py-5 mt-5">
                <h1 className="">Hi Im Jihan Annisa Putri</h1>
                <p className="">
                  Saya Seorang photografer dan juga seorang programmer{" "}
                </p>
                <Link href="/about">
                  <a className="btn btn-warning">See About Me</a>
                </Link>
              </div>
            </div>
            <div className="col md-6">
              <img
                src="/gambar/11.png"
                className="img-fluid "
                width="500"
                alt="landing page"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
