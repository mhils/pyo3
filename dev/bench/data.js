window.BENCHMARK_DATA = {
  "lastUpdate": 1685619833146,
  "repoUrl": "https://github.com/mhils/pyo3",
  "entries": {
    "pyo3-bench": [
      {
        "commit": {
          "author": {
            "email": "26634292+bors[bot]@users.noreply.github.com",
            "name": "bors[bot]",
            "username": "bors[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "451729aef0e787a85011dc608433dea9c663ecee",
          "message": "Merge #3187\n\n3187: release: 0.19.0 r=davidhewitt a=davidhewitt\n\nAs per #3154 I think we're ready to push 0.19.\r\n\r\nI'll put this live on Tuesday evening unless I hear a reason to postpone.\n\nCo-authored-by: David Hewitt <1939362+davidhewitt@users.noreply.github.com>",
          "timestamp": "2023-05-31T15:00:27Z",
          "tree_id": "a0e1f679ba3ff671e187e21d1594aeb60738b7b1",
          "url": "https://github.com/mhils/pyo3/commit/451729aef0e787a85011dc608433dea9c663ecee"
        },
        "date": 1685619689104,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 58719,
            "range": "± 1455",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 155015,
            "range": "± 4717",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3277851,
            "range": "± 26542",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4885447,
            "range": "± 132816",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3366854,
            "range": "± 52654",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7962771,
            "range": "± 172409",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13398875,
            "range": "± 162061",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7447948,
            "range": "± 681888",
            "unit": "ns/iter"
          },
          {
            "name": "mapping_from_dict",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2021768,
            "range": "± 20034",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1425383,
            "range": "± 112060",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1188770,
            "range": "± 41816",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1074672,
            "range": "± 41219",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_list",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 3502,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3167,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "set_new",
            "value": 2013805,
            "range": "± 24841",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2666652,
            "range": "± 15776",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9148132,
            "range": "± 91217",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 5088430,
            "range": "± 29052",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6542185,
            "range": "± 116933",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1376245,
            "range": "± 3099",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1416209,
            "range": "± 141283",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 892550,
            "range": "± 1289",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 800502,
            "range": "± 779",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_tuple",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new_list",
            "value": 229562,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_to_list",
            "value": 153045,
            "range": "± 850",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "pytest-bench": [
      {
        "commit": {
          "author": {
            "email": "26634292+bors[bot]@users.noreply.github.com",
            "name": "bors[bot]",
            "username": "bors[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "451729aef0e787a85011dc608433dea9c663ecee",
          "message": "Merge #3187\n\n3187: release: 0.19.0 r=davidhewitt a=davidhewitt\n\nAs per #3154 I think we're ready to push 0.19.\r\n\r\nI'll put this live on Tuesday evening unless I hear a reason to postpone.\n\nCo-authored-by: David Hewitt <1939362+davidhewitt@users.noreply.github.com>",
          "timestamp": "2023-05-31T15:00:27Z",
          "tree_id": "a0e1f679ba3ff671e187e21d1594aeb60738b7b1",
          "url": "https://github.com/mhils/pyo3/commit/451729aef0e787a85011dc608433dea9c663ecee"
        },
        "date": 1685619813804,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 2093928.6541546742,
            "unit": "iter/sec",
            "range": "stddev: 0.000004840472109947376",
            "extra": "mean: 477.57119041083246 nsec\nrounds: 126583"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 5175927.928148371,
            "unit": "iter/sec",
            "range": "stddev: 7.39596823362172e-7",
            "extra": "mean: 193.2020719534303 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 8154394.6763142925,
            "unit": "iter/sec",
            "range": "stddev: 1.0931781322421011e-7",
            "extra": "mean: 122.63325969556497 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 7607148.359736074,
            "unit": "iter/sec",
            "range": "stddev: 4.3797151236288133e-7",
            "extra": "mean: 131.4553039736789 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 2780381.2523124437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017494685926172252",
            "extra": "mean: 359.66290564227467 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 1653180.4023116736,
            "unit": "iter/sec",
            "range": "stddev: 0.000002741049857359006",
            "extra": "mean: 604.8946615878588 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2436220.0889413804,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017516130295987475",
            "extra": "mean: 410.4719456745496 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1246637.6056087154,
            "unit": "iter/sec",
            "range": "stddev: 0.00000213746680319876",
            "extra": "mean: 802.1577365394126 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1624887.3390342323,
            "unit": "iter/sec",
            "range": "stddev: 9.378986566727139e-7",
            "extra": "mean: 615.4272828507188 nsec\nrounds: 78126"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1033798.974311833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025953015906868806",
            "extra": "mean: 967.3060477407304 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1518307.2392957977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010082752169930327",
            "extra": "mean: 658.628223668267 nsec\nrounds: 72464"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1044685.8879534646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033891674099252623",
            "extra": "mean: 957.2255273391277 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 1900263.7324991515,
            "unit": "iter/sec",
            "range": "stddev: 0.000002952135977473302",
            "extra": "mean: 526.2427435184633 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 2114326.809654937,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018029064647604173",
            "extra": "mean: 472.963779976475 nsec\nrounds: 169492"
          }
        ]
      }
    ]
  }
}