type Props = {
  params: Promise<{ slug: string[] }>;
};

// [userId] - коли параметр (динамічний сегмент) тільки один
// [...slug] - коли параметрів (динамічних сегментів) будь яка кількість

export default async function InfoPage({ params }: Props) {
  const { slug } = await params;
  const make = slug[0];
  const model = slug[1];
  const eng = slug[2];
  return (
    <div>
      <h1>Info page</h1>
      <p>Make: {make}</p>
      <p>Model: {model}</p>
      <p>Eng: {eng}</p>
    </div>
  );
}

// http://localhost:3000/info/bmw/a/b/c/d
// [ 'bmw', 'a', 'b', 'c', 'd' ]

// http://localhost:3000/info/bmw
// [ 'bmw' ]

// http://localhost:3000/info/bmw/5-g30-f90-z-09-2016-do-n-ch/540-i-xdrive
// [ 'bmw', '5-g30-f90-z-09-2016-do-n-ch', '540-i-xdrive' ]

// http://localhost:3000/info/audi/a4-avant-8k5-b8-s-11-2007-po-12-2015/2-0-tdi-13
// [ 'audi', 'a4-avant-8k5-b8-s-11-2007-po-12-2015', '2-0-tdi-13' ]
