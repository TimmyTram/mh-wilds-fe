'use server';

export async function getVersion() {
    const res = await fetch('https://wilds.mhdb.io/version');
    let version = null;

    if (res.ok) {
        const data = await res.json();
        version = data.version;
    }

    return {
        status: res.status,
        version,
    };
}