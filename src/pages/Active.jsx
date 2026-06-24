import React, { useState } from "react";

const stories = [
    {
        id: "entrada",
        title: "Entrada",
        subtitle: "para empezar",
        description: "Budget, first lines, and people who mostly live on WiFi.",
        plans: [
            {
                sku: "778",
                name: "SMS Verification",
                price: "$2.75",
                who: "People who just need a U.S. number for verification codes — setting up WhatsApp, a banking app, or a marketplace/rideshare account. Common for new arrivals and anyone needing a second number for OTPs, not a full phone line.",
                es: "Tu número de EE.UU. para recibir códigos. Activa WhatsApp, tu banco y tus apps sin complicaciones.",
                us: "A U.S. number for verification codes. Set up WhatsApp, banking, and your apps — no full plan needed.",
            },
            {
                sku: "780",
                name: "Unlimited Talk & Text (No Data)",
                price: "$4.75",
                who: "Heavy talkers who stay on WiFi at home and work — long calls to family, texting all day, but no browsing on cellular. Great for an older relative or a stay-close-to-home user.",
                es: "Habla y textea sin límite. Perfecto si pasas el día conectado al WiFi de casa o del trabajo.",
                us: "Unlimited talk and text. Ideal if you're on WiFi at home or work all day.",
            },
            {
                sku: "781",
                name: "Unlimited Talk & Text + 100MB",
                price: "$5",
                who: "Budget-first users and second lines. Mostly on WiFi but want a little data for maps or a quick message when they step out. The cheapest way to stay fully reachable.",
                es: "Llamadas y textos ilimitados más un poco de datos para cuando sales. Lo esencial, al mejor precio.",
                us: "Unlimited talk and text plus a little data for when you're out. The essentials, for less.",
            },
        ],
    },
    {
        id: "conecta",
        title: "Conecta",
        subtitle: "para cada día",
        description: "The everyday family tier — WhatsApp, social, and maps.",
        plans: [
            {
                sku: "779",
                name: "Talk, Text & 500MB",
                price: "$7.50",
                who: "Light everyday users — a few WhatsApp chats, occasional maps, checking messages on the go. Online, but not glued to the phone.",
                es: "Para el día a día ligero: WhatsApp, mensajes y un mapa cuando lo necesitas.",
                us: "For light daily use — WhatsApp, messages, and maps when you need them.",
            },
            {
                sku: "782",
                name: "Talk, Text & 1GB",
                price: "$8.50",
                badge: "Más popular",
                who: "The everyday family user, and your volume favorite. WhatsApp calls, social, maps, sharing photos — enough data for the whole month without overthinking it.",
                es: "El favorito de la familia. WhatsApp, redes y mapas todo el mes, sin preocupaciones.",
                us: "The family favorite. WhatsApp, social, and maps all month — no worries.",
            },
            {
                sku: "783",
                name: "Talk, Text & 2GB",
                price: "$15",
                who: "More active users who lean on their phone — multiple chat apps, more browsing, regular scrolling. The step up when 1GB runs short before month's end.",
                es: "Más datos para los que usan más. Redes, chats y navegación sin quedarte corto.",
                us: "More data for heavier days — social, chats, and browsing without running out.",
            },
        ],
    },
    {
        id: "conecta-max",
        title: "Conecta Max",
        subtitle: "sin límites",
        description:
            "Unlimited everything, for phone-first and work-from-phone users.",
        plans: [
            {
                sku: "784",
                name: "Unlimited Talk, Text & 5GB",
                price: "$20",
                who: "People who work from their phone — rideshare and delivery drivers on maps all day, anyone who needs reliable unlimited talk plus real data. Your first true unlimited-everything tier.",
                es: "Todo ilimitado y 5GB de datos. Para quien trabaja desde el celular: mapas, apps y llamadas sin parar.",
                us: "Unlimited everything plus 5GB. For people who work from their phone — maps, apps, calls all day.",
            },
            {
                sku: "785",
                name: "Unlimited Talk, Text & 15GB",
                price: "$35",
                who: "Phone-first users who stream — music on the commute, video, heavy social. Their phone is their main screen.",
                es: "Tu celular es tu pantalla principal. Música, video y redes con 15GB y todo ilimitado.",
                us: "When your phone is your main screen — music, video, and social with 15GB, everything unlimited.",
            },
            {
                sku: "786",
                name: "Unlimited Talk, Text & 30GB",
                price: "$45",
                who: "Your heaviest users — streaming all day, hotspot/tethering, often no home internet at all. The most complete plan you offer.",
                es: "El plan más completo. 30GB para streaming, hotspot y todo lo que hagas — sin límites.",
                us: "Our most complete plan. 30GB for streaming, hotspot, and everything you do — no limits.",
            },
        ],
    },
];

export default function PlanStoryTabs() {
    const [activeTab, setActiveTab] = useState(stories[0].id);

    const activeStory = stories.find((story) => story.id === activeTab);

    return (
        <section className="min-h-screen bg-linear-to-b from-white via-slate-50 to-white px-4 py-12 text-slate-950">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 grid gap-3 rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/70 md:grid-cols-3">
                    {stories.map((story) => {
                        const isActive = activeTab === story.id;

                        return (
                            <button
                                key={story.id}
                                onClick={() => setActiveTab(story.id)}
                                className={`rounded-2xl px-5 py-4 text-left transition ${isActive
                                        ? "bg-slate-950 text-white shadow-lg"
                                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                                    }`}
                            >
                                <span className="block text-xl font-black">{story.title}</span>
                                <span
                                    className={`block text-sm font-bold ${isActive ? "text-blue-200" : "text-slate-500"
                                        }`}
                                >
                                    — {story.subtitle}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
                    <h2 className="text-3xl font-black">
                        {activeStory.title}{" "}
                        <span className="text-slate-400">— {activeStory.subtitle}</span>
                    </h2>

                    <p className="mt-3 text-lg font-medium text-slate-600">
                        {activeStory.description}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {activeStory.plans.map((plan) => (
                        <article
                            key={plan.sku}
                            className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-xl shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-2xl ${plan.badge
                                    ? "border-blue-300 ring-4 ring-blue-100"
                                    : "border-slate-200"
                                }`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-3 left-6 rounded-full bg-blue-600 px-4 py-1 text-xs font-black text-white shadow-lg">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="mb-5 flex items-start justify-between gap-4 pt-2">
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                                        {plan.sku}
                                    </p>
                                    <h3 className="mt-1 text-2xl font-black leading-tight">
                                        {plan.name}
                                    </h3>
                                </div>

                                <div className="shrink-0 text-right">
                                    <p className="text-3xl font-black text-blue-600">
                                        {plan.price}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-4 rounded-2xl bg-slate-50 p-4">
                                <p className="mb-2 text-sm font-black text-slate-950">
                                    Who it's for:
                                </p>
                                <p className="text-sm leading-6 text-slate-600">{plan.who}</p>
                            </div>

                            <div className="space-y-3">
                                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                    <p className="mb-1 text-sm font-black">🇪🇸</p>
                                    <p className="text-sm leading-6 text-slate-600">{plan.es}</p>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                    <p className="mb-1 text-sm font-black">🇺🇸</p>
                                    <p className="text-sm leading-6 text-slate-600">{plan.us}</p>
                                </div>
                            </div>

                            <button className="mt-auto rounded-2xl bg-slate-950 px-5 py-4 text-sm font-black text-white transition hover:bg-blue-600">
                                Choose this plan
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}