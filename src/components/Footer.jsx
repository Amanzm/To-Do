import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="text-center font-mono text-white  bg-violet-400">
        <div className="container mx-auto">
          <section className="mb-3">
            <div className="row justify-center">
              <hr className="my-4 w-full" />
              <div className="col-lg-12">
                <p class="text-sm ">
                  Stay organized and manage your tasks efficiently with my Todo
                  app. With intuitive features and a clean interface, managing
                  your tasks has never been easier.
                </p>
              </div>
            </div>
          </section>
          <hr className="bg-white" />
        </div>

        <div className="  text-center py-3 bg-violet-400">
          &copy; 2024 Azmy's Todo. All rights reserved. <br />
          Designed with ❤️ by Amanzm00
        </div>
      </footer>
    </div>
  );
}
