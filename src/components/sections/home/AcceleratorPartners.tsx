import React from "react";

export function AcceleratorPartners() {
  return (
    <section className="py-16 bg-content2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Startup Accelerator Partners</h2>
          <p className="mt-4 text-lg text-foreground/60">
            Proud member of leading technology accelerator programs
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* NVIDIA Inception */}
          <div className="flex flex-col items-center justify-center p-8 bg-content1 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="https://www.nvidia.com/en-us/about-nvidia/legal-info/logo-brand-usage/_jcr_content/root/responsivegrid/nv_container_392921705/nv_container/nv_image.coreimg.100.630.png/1703060329053/nvidia-logo-vert.png"
              alt="NVIDIA Inception Program"
              className="h-24 object-contain dark:invert"
            />
            <h3 className="mt-6 text-xl font-semibold text-foreground">NVIDIA Inception Program</h3>
            <p className="mt-2 text-center text-foreground/60">
              Accelerating AI innovation and development through NVIDIA's technology and expertise
            </p>
          </div>

          {/* AWS Startup */}
          <div className="flex flex-col items-center justify-center p-8 bg-content1 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png"
              alt="AWS Startup Program"
              className="h-24 object-contain"
            />
            <h3 className="mt-6 text-xl font-semibold text-foreground">AWS Startup Program</h3>
            <p className="mt-2 text-center text-foreground/60">
              Building scalable solutions with Amazon Web Services' cutting-edge cloud infrastructure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}