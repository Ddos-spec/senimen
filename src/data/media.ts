export type DriveMediaKind = 'image' | 'video' | 'audio' | 'file';

export type DriveMedia = {
  id: string;
  title: string;
  mimeType: string;
  group: string;
  kind: DriveMediaKind;
  viewUrl: string;
  previewUrl: string;
  thumbnailUrl?: string;
};

type RawDriveMedia = Omit<DriveMedia, 'kind' | 'viewUrl' | 'previewUrl' | 'thumbnailUrl'>;

const rawDriveMedia: RawDriveMedia[] = [
  // CONTENT 1 — Kolektif Arifin / OUTPUT
  { id: '1_IjAQmZm15H76AhCTxqcunfsd18qPn_S', title: 'Slide 1.png', mimeType: 'image/png', group: 'KOLEKTIF ARIFIN' },
  { id: '1mvNWw1noVzuLG960Lk4EWEZnLUh3fk2B', title: 'Slide 2.png', mimeType: 'image/png', group: 'KOLEKTIF ARIFIN' },
  { id: '1l2dO-x50JUqZUngpj4Kk6Wdf4pCM2u3T', title: 'Slide 3.png', mimeType: 'image/png', group: 'KOLEKTIF ARIFIN' },
  { id: '1C4OmCRhynF7RzpVmh2OPPUNS79B093hp', title: 'Slide 4.png', mimeType: 'image/png', group: 'KOLEKTIF ARIFIN' },
  { id: '1td-ztk_OXanLLcA4lGGg6lBH3EG9i8t6', title: 'Slide 5.png', mimeType: 'image/png', group: 'KOLEKTIF ARIFIN' },
  { id: '13v46g_pXeLc480lbVATlRrnIemX0AzGq', title: 'Slide 6.png', mimeType: 'image/png', group: 'KOLEKTIF ARIFIN' },

  // CONTENT 2 — Perkenalan / OUTPUT
  { id: '10-YTjUCy8yOtNvvCmNvhAWeyET6P3kW_', title: 'Slide 2 dan 3.mp4', mimeType: 'video/mp4', group: 'PERKENALAN' },
  { id: '1F2WsnUNdu8a5LKSVvJDgadFe169wGl5-', title: 'IMG_0349.PNG', mimeType: 'image/png', group: 'PERKENALAN' },

  // CONTENT 3 — Kolektif Alang Salaka / OUTPUT
  { id: '1lW3jMkK5EuC-NN1hX9zKl77fLGS-Hx57', title: 'Slide 1', mimeType: 'image/jpeg', group: 'KOLEKTIF ALANG SALAKA' },
  { id: '1JtbGFq1Cfg_eNMWsdMtud2gYjOdIgO1h', title: 'Slide 3', mimeType: 'image/jpeg', group: 'KOLEKTIF ALANG SALAKA' },
  { id: '18aRjOh1cm_P1Ce16OCkS8lkokuR6mYph', title: 'Slide 4', mimeType: 'image/jpeg', group: 'KOLEKTIF ALANG SALAKA' },
  { id: '1FC_Zy4_tIAeF862vkmncectX10KcsjmJ', title: 'Slide 5', mimeType: 'image/jpeg', group: 'KOLEKTIF ALANG SALAKA' },
  { id: '1yLdc-aDr2ClzNfyE1q5pWInhxEPtOjtn', title: 'Slide 6', mimeType: 'image/jpeg', group: 'KOLEKTIF ALANG SALAKA' },

  // CONTENT 4 — Kolektor Gilang / OUTPUT
  { id: '1C0eFtCYZ_AuJ36_o-kz8jBbbxGa35TTx', title: 'Slide 1', mimeType: 'image/jpeg', group: 'KOLEKTOR GILANG' },
  { id: '1J4VNEc1LM5_PU_MzRP3bXve5pjqmH2Fz', title: 'Slide 2', mimeType: 'image/jpeg', group: 'KOLEKTOR GILANG' },
  { id: '1M9MGvf039nJlwmOU3PU2GKcAlS0Y2SKu', title: 'Slide 3', mimeType: 'image/jpeg', group: 'KOLEKTOR GILANG' },
  { id: '1EZPu5jvtBD8-Kwu8PNHfpz9leENcW_KM', title: 'Slide 4', mimeType: 'image/jpeg', group: 'KOLEKTOR GILANG' },
  { id: '1X4vUxJ14GGZxyMXToyConzSwh7AF6PhL', title: 'Slide 5', mimeType: 'image/jpeg', group: 'KOLEKTOR GILANG' },
  { id: '1j0Wjh3qoTRI5wbsEYpcOphA2V_x1Edny', title: 'Slide 6', mimeType: 'image/jpeg', group: 'KOLEKTOR GILANG' },

  // CONTENT 7 / OUTPUT
  { id: '13W21w7prcNfFylDZAAry74NruH95Urkv', title: 'SLIDE 1.png', mimeType: 'image/png', group: 'CONTENT 7' },
  { id: '1oyojL8e-zuykloVkovBzGjRRP0t8NvBT', title: 'SLIDE 2.png', mimeType: 'image/png', group: 'CONTENT 7' },
  { id: '1pFIaQkLdE-aP2YxotEYvWrb1UFtLDw-9', title: 'SLIDE 3.mp4', mimeType: 'video/mp4', group: 'CONTENT 7' },
  { id: '12MjYOMNUeBJGMW1HVZycwSD7cR-T0Nen', title: 'SLIDE 4.png', mimeType: 'image/png', group: 'CONTENT 7' },

  // CONTENT 11 & 12 — Rekap Pesbi / OUTPUT
  { id: '1LJnHkIZdhBwuX8TDmNjqg326tid0JX1E', title: 'REKAP 1.mp4', mimeType: 'video/mp4', group: 'REKAP PESBI 1' },
  { id: '1d5nRhJIHc1tl6F9ty_lalEUL6G8CSyFw', title: 'REKAP 2.mp4', mimeType: 'video/mp4', group: 'REKAP PESBI 2' },

  // CONTENT 13 — Film Favorite / OUTPUT
  { id: '14utZDAU82hSy_o1Bqxj5N6hBwVzgcQmN', title: 'NANYA NANYA 1.mov', mimeType: 'video/quicktime', group: 'FILM FAVORITE' },

  // CONTENT 14 — Wawancara / OUTPUT (termasuk subfolder di dalam OUTPUT)
  { id: '1nVfaRLmH2lXLifTVfekev49Ij3JhZ7qA', title: 'TANYA TANYA PART 1.mov', mimeType: 'video/quicktime', group: 'WAWANCARA' },
  { id: '1Uxvs118Sf3P5_tOBx2xuVDg886ENiok4', title: '2.mov', mimeType: 'video/quicktime', group: 'WAWANCARA' },
  { id: '1epygFARLn8pL4LVV07ip2rWEolTccEbi', title: 'film favorit 1.aac', mimeType: 'audio/aac', group: 'WAWANCARA / AUDIO' },
  { id: '1M7t56elfdZplAoGkwcxY9hTfmsJag0ME', title: 'film favorit 2.aac', mimeType: 'audio/aac', group: 'WAWANCARA / AUDIO' },
  { id: '1hsbz8NxmfEgDXMMWGD1Cgt5qt5lwroan', title: 'film favorit 3.aac', mimeType: 'audio/aac', group: 'WAWANCARA / AUDIO' },
  { id: '1L5ihGGjJU0OdXLeF9cl16-JcF3EOU_YJ', title: 'film favorit 4.aac', mimeType: 'audio/aac', group: 'WAWANCARA / AUDIO' },
  { id: '1lveismHs8JACuYyD-QZ_yro26bGgeeQ_', title: 'respon nobar dan diskusi 1.aac', mimeType: 'audio/aac', group: 'WAWANCARA / AUDIO' },
  { id: '1TYxICzvnvlAvS2MDgkYLHvp4R1XX_IIA', title: 'respon nobar dan diskusi 2.aac', mimeType: 'audio/aac', group: 'WAWANCARA / AUDIO' },
  { id: '1HcJJCvGtK5DFXtn25Plcx8Zaw9Rriq03', title: 'respon nobar dan diskusi 3.aac', mimeType: 'audio/aac', group: 'WAWANCARA / AUDIO' },
  { id: '1F4kP7DqKPsKnRDMVNRlFpfSVGfYwiN5w', title: 'respon nobar dan diskusi 4.aac', mimeType: 'audio/aac', group: 'WAWANCARA / AUDIO' },
  { id: '1tEAjFlvn1eQ56jTHyDE5mEzTIhSiYwk-', title: 'respon nobar dan diskusi 5 (jais).aac', mimeType: 'audio/aac', group: 'WAWANCARA / AUDIO' },
  { id: '1XhmiQo0baZlacNj0lkTyiDdhMpgyJ348', title: 'film favorit 5 dan respon nobar dan diskusi 6 (Reno).aac', mimeType: 'audio/aac', group: 'WAWANCARA / AUDIO' },

  // CONTENT 15 — Rekap Foto Pesbi / OUTPUT
  { id: '1QZ4uJ_OqxzlCTTMsU_XZv3OL_w9dj0-d', title: 'FOTO-REKAP-PESBI_01.jpg', mimeType: 'image/jpeg', group: 'REKAP FOTO PESBI' },
  { id: '1tvogg_zI3P53Knd6LYSAXbdl-HFhjKat', title: 'FOTO-REKAP-PESBI_02.jpg', mimeType: 'image/jpeg', group: 'REKAP FOTO PESBI' },
  { id: '11zRX7pPGxB__0ezAcJg-ahpJK2XqsKhJ', title: 'FOTO-REKAP-PESBI_03.jpg', mimeType: 'image/jpeg', group: 'REKAP FOTO PESBI' },
  { id: '1tVJzYrISl1LbUzNkzDkc_DDRedPKPAaq', title: 'FOTO-REKAP-PESBI_04.jpg', mimeType: 'image/jpeg', group: 'REKAP FOTO PESBI' },
  { id: '1LdwqAs-d78lCAk0LizWLIz-aup43RJCf', title: 'FOTO-REKAP-PESBI_05.jpg', mimeType: 'image/jpeg', group: 'REKAP FOTO PESBI' },
  { id: '1jGD6rNTzeuPxFlNWtj4s0YxyHaE3Iz-m', title: 'FOTO-REKAP-PESBI_06.jpg', mimeType: 'image/jpeg', group: 'REKAP FOTO PESBI' },
  { id: '1V1DKNgagOC80AUUODkt38ZTdJGavIRZF', title: 'FOTO-REKAP-PESBI_07.jpg', mimeType: 'image/jpeg', group: 'REKAP FOTO PESBI' },
  { id: '1bUB6d1Xf4je5I7oT3lyjCFtwzbn4Sldh', title: 'FOTO-REKAP-PESBI_08.jpg', mimeType: 'image/jpeg', group: 'REKAP FOTO PESBI' },
  { id: '1ae_5rmiknvNMi4lcr59PcH0ucoc2Xr9V', title: 'FOTO-REKAP-PESBI_09.jpg', mimeType: 'image/jpeg', group: 'REKAP FOTO PESBI' },
  { id: '13C2eKZqDiaX-_4fgrLzE0ktRtr8KMGUk', title: 'FOTO-REKAP-PESBI_10.jpg', mimeType: 'image/jpeg', group: 'REKAP FOTO PESBI' },

  // CONTENT 16 — Kolektif Jhon de Black / OUTPUT
  { id: '18NZFyuCW81DRP_JAf-zMcHqd0xqFWNEy', title: 'SLIDE 1.png', mimeType: 'image/png', group: 'KOLEKTIF JHON DE BLACK' },
  { id: '1srr1uq6-akFQfXxui4af6hEt5ua_OMPi', title: 'SLIDE 2.png', mimeType: 'image/png', group: 'KOLEKTIF JHON DE BLACK' },
  { id: '1XvwfnTCdYL8eUpGCdWGFb38XzMhyIw3L', title: 'SLIDE 3.png', mimeType: 'image/png', group: 'KOLEKTIF JHON DE BLACK' },
  { id: '1dOkSU2KDqjgUcjZHR5oQNmSMRcJkOGH1', title: 'SLIDE 4.png', mimeType: 'image/png', group: 'KOLEKTIF JHON DE BLACK' },
  { id: '1ZpxsXQxI2O5OwzxScFI0P4QpKlym_17I', title: 'SLIDE 5.png', mimeType: 'image/png', group: 'KOLEKTIF JHON DE BLACK' },
  { id: '1nT7JbtjW1NxomeDOFybblGS5O6ec4yHk', title: 'SLIDE 6.png', mimeType: 'image/png', group: 'KOLEKTIF JHON DE BLACK' },

  // CONTENT 17 — SDJ Vol.1 / OUTPUT
  { id: '1IiJcq3iNRrtCaN_hbHZUsg8PDpSyEZI8', title: '0614.mp4', mimeType: 'video/mp4', group: 'SDJ VOL.1' },

  // CONTENT 20 — Kolektif Marwan / OUTPUT
  { id: '12TUmBM9Rv51w1cQ2yMbxXdvJIVcDIeEI', title: 'Artboard 1.png', mimeType: 'image/png', group: 'KOLEKTIF MARWAN' },
  { id: '1SAlTj6Yok0P7n0cwgYnxoD0yTJXjGNhP', title: 'Artboard 2.png', mimeType: 'image/png', group: 'KOLEKTIF MARWAN' },
  { id: '11jJcnzBnzLZmbwVEH1jNwN_alDcMyaij', title: 'Artboard 3.png', mimeType: 'image/png', group: 'KOLEKTIF MARWAN' },
  { id: '18mkKrLQreLJO_qU3oYpmjvszxvvshTZ9', title: 'Artboard 4.png', mimeType: 'image/png', group: 'KOLEKTIF MARWAN' },
  { id: '1xTv2cgW15xQgXTfipWgEOqF0UtlxqObg', title: 'Artboard 5.png', mimeType: 'image/png', group: 'KOLEKTIF MARWAN' },
  { id: '14JDzU-xFTh6I4PyMbJqSjyW9GaD1tTdY', title: 'Artboard 6.png', mimeType: 'image/png', group: 'KOLEKTIF MARWAN' },
  { id: '1ZyT169UkyiRUS67UCUoJ9JlrnzZGXQs1', title: 'Artboard 7.png', mimeType: 'image/png', group: 'KOLEKTIF MARWAN' },
  { id: '1Mi9WSXfwfvp44RLzfoGCeq2K-LoouY6_', title: 'Artboard 8.png', mimeType: 'image/png', group: 'KOLEKTIF MARWAN' },

  // CONTENT 21 — Kolektif Janggal / OUTPUT
  { id: '11uaw7NJxbukQLkUQYaZiAaBmTMuyn-P4', title: 'Slide 1.jpg', mimeType: 'image/jpeg', group: 'KOLEKTIF JANGGAL' },
  { id: '1nbM_dwLSxvHqmHCiqrAtySDvLU6U85e2', title: 'Slide 2.jpg', mimeType: 'image/jpeg', group: 'KOLEKTIF JANGGAL' },
  { id: '1_aDNEUfQM1UJht4umIbyyGlfAmNn2k45', title: 'Slide 3 v2.jpg', mimeType: 'image/jpeg', group: 'KOLEKTIF JANGGAL' },
  { id: '1DolJmbos17_ai0hv2mshH18-UWKeRXfq', title: 'Slide 4.jpg', mimeType: 'image/jpeg', group: 'KOLEKTIF JANGGAL' },
  { id: '150iD_S758CwfjSjF_vkAlLQHejIfB_L9', title: 'Slide 5.jpg', mimeType: 'image/jpeg', group: 'KOLEKTIF JANGGAL' },

  // CONTENT 22 — For You Hana / OUTPUT
  { id: '16ELz8IVRGjfPE4x0LkIgc7OzwUZ2PTtn', title: 'Slide 1.jpg', mimeType: 'image/jpeg', group: 'FOR YOU HANA' },
  { id: '1Zb9cd8U1ILfnRytCne2eqV-XWI748zHu', title: 'Slide 2.jpg', mimeType: 'image/jpeg', group: 'FOR YOU HANA' },
  { id: '19kbZdmesYR3R5rEgcvRENHND7GFUHuJI', title: 'Slide 3.jpg', mimeType: 'image/jpeg', group: 'FOR YOU HANA' },
  { id: '1j2ZHJGfAhjZvlBxwA05YudXAW_bBVFcJ', title: 'Slide 4.jpg', mimeType: 'image/jpeg', group: 'FOR YOU HANA' },
  { id: '11f66I0qWI_m60qeujL38e3okCy6dBsVf', title: 'Slide 5.jpg', mimeType: 'image/jpeg', group: 'FOR YOU HANA' },
  { id: '1sdAeA1ZsFBimozsdhx8btOR4t25RrIiV', title: 'Slide 6.jpg', mimeType: 'image/jpeg', group: 'FOR YOU HANA' },
  { id: '1gvdGMGGMNwUalQlAFjklVRdZLUCC6cuu', title: 'Slide 7.jpg', mimeType: 'image/jpeg', group: 'FOR YOU HANA' },
  { id: '1X_Amd1QcSCusp56ElFapwPUiOx-_QJeN', title: 'Slide 8.jpg', mimeType: 'image/jpeg', group: 'FOR YOU HANA' },

  // CONTENT 23 / OUTPUT
  { id: '1KtVwP7xkbmTNXaEFAhTz33ATfB_sBOVH', title: 'SLIDE 1.png', mimeType: 'image/png', group: 'CONTENT 23' },
  { id: '1FboJ4ZAkwKk6GUzTlUQAoi8qRezzKGoT', title: 'SLIDE 2.png', mimeType: 'image/png', group: 'CONTENT 23' },

  // CONTENT 27 — Interview Tokoh 1 / OUTPUT
  { id: '1xLA1wbSSXRqJHCeng9mRZWADSQRXzl7g', title: 'INTERVIEW TOKOH 1.mp4', mimeType: 'video/mp4', group: 'INTERVIEW TOKOH' },
];

const getKind = (mimeType: string): DriveMediaKind => {
  if (mimeType.startsWith('image/')) return 'image';
  if (mimeType.startsWith('video/')) return 'video';
  if (mimeType.startsWith('audio/')) return 'audio';
  return 'file';
};

export const driveArchive: DriveMedia[] = rawDriveMedia.map((item) => {
  const kind = getKind(item.mimeType);
  return {
    ...item,
    kind,
    viewUrl: `https://drive.google.com/file/d/${item.id}/view`,
    previewUrl: `https://drive.google.com/file/d/${item.id}/preview`,
    thumbnailUrl: kind === 'image' ? `https://drive.google.com/thumbnail?id=${item.id}&sz=w1600` : undefined,
  };
});

export const featuredMedia = driveArchive.filter((item) => item.kind === 'image').slice(0, 6);
